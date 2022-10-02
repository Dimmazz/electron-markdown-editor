# Simple Markdown Editor
## Development by [Dimmazz](https://github.com/Dimmazz)
___

[![Required Node.JS >= v16.13](https://img.shields.io/static/v1?label=node&message=%3E=16.13&logo=node.js&color)](https://nodejs.org/about/releases/)
[![Required npm >= v8.1](https://img.shields.io/static/v1?label=npm&message=%3E=8.1&logo=npm&color)](https://github.com/npm/cli/releases)

## Features

### Electron (In this version there is no) [![Electron version](https://img.shields.io/github/package-json/dependency-version/cawa-93/vite-electron-builder/dev/electron?label=%20)][electron]

```
A framework for building cross-platform desktop apps using HTML, JS, and CSS
```

1. The architecture of the application is built according to the
  security [guides](https://www.electronjs.org/docs/tutorial/security) and best practices.
2. The latest version of the [electron-builder] is used to package the application.

### Vite [![Vite version](https://img.shields.io/github/package-json/dependency-version/cawa-93/vite-electron-builder/dev/vite?label=%20)][vite]

```
A fast build tool
```

1. [Vite] is used to bundle all source codes. It's an extremely fast bundler, that has a vast array of amazing features.
2. Vite [supports](https://vitejs.dev/guide/env-and-mode.html) reading `.env` files. You can also specify the types of
  your environment variables in [`types/env.d.ts`](types/env.d.ts).
3. Automatic hot-reloads for the `Main` and `Renderer` processes.

Vite provides many useful features, such as: `TypeScript`, `TSX/JSX`, `CSS/JSON Importing`, `CSS Modules`
, `Web Assembly` and much more.

[See all Vite features](https://vitejs.dev/guide/features.html).

### TypeScript [![TypeScript version](https://img.shields.io/github/package-json/dependency-version/cawa-93/vite-electron-builder/dev/typescript?label=%20)][typescript]

```
A typed JavaScript
```

1. The latest version of TypeScript is used for all the source code.
2. **Vite** supports TypeScript out of the box. However, it does not support type checking.
3. Code formatting rules follow the latest TypeScript recommendations and best practices thanks
  to [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

### React [![React version](https://img.shields.io/badge/-18.2.0-blue)][react] 

```
A library for building UI
```

1. Code formatting rules follow the latest React recommendations and best practices

### CodeMirror 6 ![CodeMirror6 version](https://img.shields.io/badge/-6.0.1-blue)

```
An extensible code editor for the web
```

### Remark (remark-parser) ![Remark version](https://img.shields.io/badge/-10.0.1-blue)

```
An extensible Markdown processor
```
___

**I'm used this** [**template**](https://github.com/cawa-93/vite-electron-builder) *(thanks [cawa][cawa-93-github] <3)*


[vite]: https://github.com/vitejs/vite/

[electron]: https://github.com/electron/electron

[electron-builder]: https://github.com/electron-userland/electron-builder

[react]: https://reactjs.org

[typescript]: https://github.com/microsoft/TypeScript/

[cawa-93-github]: https://github.com/cawa-93/