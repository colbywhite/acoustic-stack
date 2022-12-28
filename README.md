# Remix Acoustic Stack

![The Remix Acoustic Stack](/hero-screenshot.png)

This is a minimal Remix stack to serve as a starting point for demos and debugging. If you need to reproduce a bug in Remix, this stack is a good starting point to do so since it has very little outside of Remix. It's also a good tool if you're trying to demo something Remix-specific.

Learn more about [Remix Stacks](https://remix.run/stacks).

```
yarn create remix --template colbywhite/acoustic-stack
```

## What's in the stack

- Styling with [Tailwind](https://tailwindcss.com/)
- Unit testing with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)

That's it.

Tailwind and Vitest aren't Remix-specific concepts, but if you quickly need to spin up a demo, a basic styling tool and a test runner will help. And a linter/formatter keeps the code clean for others to grok.

If you need more you can fork this and make it your own.

## Development

```bash
yarn dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Testing

### Vitest

For lower level tests of utilities and individual components, we use `vitest`. We have DOM-specific assertion helpers via [`@testing-library/jest-dom`](https://testing-library.com/jest-dom).

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `yarn typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
