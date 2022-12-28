import heroImageUrl from "../assets/hero-image.jpg";
import remixLogoUrl from "../assets/remix-logo.svg";
import tailwindLogoUrl from "../assets/tailwind.svg";
import vitestLogoUrl from "../assets/vitest.svg";
import prettierLogoUrl from "../assets/prettier.svg";
import eslintLogoUrl from "../assets/eslint.svg";
import type { LinksFunction } from "@remix-run/node";

const LIBRARIES = [
  {
    src: tailwindLogoUrl,
    alt: "Tailwind",
    href: "https://tailwindcss.com",
  },
  {
    src: vitestLogoUrl,
    alt: "Vitest",
    href: "https://vitest.dev",
  },
  {
    src: prettierLogoUrl,
    alt: "Prettier",
    href: "https://prettier.io",
  },
  {
    src: eslintLogoUrl,
    alt: "ESLint",
    href: "https://eslint.org",
  },
];

export const links: LinksFunction = () => {
  return [
    { rel: "preload", href: heroImageUrl },
    ...LIBRARIES.map(({ src }) => ({
      rel: "preload",
      href: src,
    })),
  ];
};

export default function Index() {
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="grid grid-cols-[1fr] grid-rows-[70vh] sm:m-4 sm:grid-rows-[500px] md:m-8">
        <figure className="col-start-1 col-end-2 row-start-1 row-end-2 grid grid-cols-[100%] grid-rows-[100%]">
          <img
            src={heroImageUrl}
            alt="Person Playing Acoustic Guitar"
            className="col-start-1 col-end-2 row-start-1 row-end-2 h-full w-full object-cover sm:rounded-xl"
          />
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-purple-200 mix-blend-multiply sm:rounded-xl" />
          <figcaption className="z-10 col-start-1 col-end-2 row-start-1 row-end-2 mr-2 mb-2 place-self-end text-xs italic text-white">
            Photo by Del Adams via{" "}
            <a
              className="text-purple-500 underline hover:text-white hover:no-underline"
              href="https://www.pexels.com/photo/monochrome-photo-of-person-playing-acoustic-guitar-2444860/"
            >
              Pexels
            </a>
          </figcaption>
        </figure>
        <div className="z-20 col-start-1 col-end-2 row-start-1 row-end-2 mt-8 justify-self-center md:mt-24">
          <h1 className="text-center text-5xl font-extrabold uppercase tracking-tight text-purple-500 text-purple-700 drop-shadow-md">
            Acoustic stack
          </h1>
          <p className="mx-auto mt-6 max-w-xs text-center text-xl text-white sm:max-w-2xl">
            This is a minimal Remix stack to serve as a starting point for demos
            and debugging.
          </p>
          <p className="mx-auto mt-16 text-center text-white">
            <a href="https://remix.run">
              <img
                src={remixLogoUrl}
                alt="Remix"
                className="inline w-full max-w-[12rem] md:max-w-[16rem]"
              />
            </a>
          </p>
        </div>
      </section>
      {/* Library section */}
      <section className="m-4 md:m-8">
        <h2 className="mx-auto mt-8 text-center text-xl sm:text-2xl">
          Only contains the following extra technologies
        </h2>
        <ul className="mx-auto mt-4 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          {LIBRARIES.map(({ src, alt, href }) => (
            <li key={href} className="">
              <a
                href={href}
                className="flex h-16 w-32 grayscale transition hover:grayscale-0 focus:grayscale-0"
              >
                <img src={src} alt={alt} className="h-full w-full" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
