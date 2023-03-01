const crypto = require("crypto");
const fs = require("fs/promises");
const path = require("path");
const sort = require("sort-package-json");

function getRandomString(length) {
  return crypto.randomBytes(length).toString("hex");
}

// The initialization script for your project after you've installed.
// This will:
// - Replace our template name for your given app name in the package.json
async function main({ rootDirectory }) {
  const PACKAGE_JSON_PATH = path.join(rootDirectory, "package.json");
  const DIR_NAME = path.basename(rootDirectory);
  const SUFFIX = getRandomString(2);
  const APP_NAME = (DIR_NAME + "-" + SUFFIX)
    // get rid of anything that's not allowed in an app name
    .replace(/[^a-zA-Z0-9-_]/g, "-");

  const packageJson = await fs.readFile(PACKAGE_JSON_PATH, "utf-8");

  // remove CHANGELOG
  const CHANGELOG_PATH = path.join(rootDirectory, "CHANGELOG.md");
  await fs.rm(CHANGELOG_PATH, { force: true });

  // Parse the package file and
  // - rename the application name
  // - remove version
  const newPackageJson =
    JSON.stringify(
      sort({ ...JSON.parse(packageJson), name: APP_NAME, version: undefined }),
      null,
      2
    ) + "\n";

  await fs.writeFile(PACKAGE_JSON_PATH, newPackageJson);
}

module.exports = main;
