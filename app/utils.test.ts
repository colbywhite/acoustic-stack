import { validateEmail } from "./utils";
import { describe, expect, it } from "vitest";

describe("validateEmail", () => {
  it("should return false for non-emails", () => {
    expect(validateEmail(undefined)).toBe(false);
    expect(validateEmail(null)).toBe(false);
    expect(validateEmail("")).toBe(false);
    expect(validateEmail("not-an-email")).toBe(false);
    expect(validateEmail("n@")).toBe(false);
  });

  it("should return true for emails", () => {
    expect(validateEmail("kody@example.com")).toBe(true);
  });
});
