# Prog1

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

## Prerequisites
- Node.js 18+ and npm
- Internet access to install dependencies from npm registry

## Install dependencies
Use npm to restore packages. If you are behind a proxy, clear outdated proxy settings first:

```bash
npm config delete http-proxy
npm config delete https-proxy
npm install
```

If npm reports vulnerabilities, upgrade to the patched Angular 20.3.15+ stack:

```bash
npm install @angular/cli@~20.3.15 @angular/build@~20.3.15 @angular/core@~20.3.15 \
  @angular/common@~20.3.15 @angular/compiler@~20.3.15 @angular/forms@~20.3.15 \
  @angular/platform-browser@~20.3.15 @angular/router@~20.3.15
```

Then rerun `npm audit fix` if needed.

## Development server
Start the dev server on all interfaces (useful for VM/containers) and pick a port you want:

```bash
npm start -- --host 0.0.0.0 --port 4200
```

Once running, open `http://localhost:4200/` (or replace `localhost` with your host IP). The app reloads automatically on file changes.

## Building
Produce an optimized production build:

```bash
npm run build
```

Artifacts are written to `dist/`.

## Running unit tests
Execute unit tests with Karma:

```bash
npm test
```

## Scaffolding
Angular CLI includes powerful code scaffolding tools. To generate a new component:

```bash
ng generate component component-name
```

For a complete list of schematics (components, directives, pipes, etc.):

```bash
ng generate --help
```

## Additional resources
For more CLI details see the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
