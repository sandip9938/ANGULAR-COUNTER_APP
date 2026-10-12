# Angular Counter App

A small, responsive counter built with Angular. Increase the value, decrease it without going below zero, or reset it to zero.

**GitHub:** [sandip9938/ANGULAR-COUNTER_APP](https://github.com/sandip9938/ANGULAR-COUNTER_APP)

## Features

- Live counter display powered by Angular signals
- Increase and decrease controls
- Counter cannot go below zero
- Reset control (disabled when the counter is already zero)
- Responsive layout with keyboard focus styles
- Accessible live announcement when the value changes

## Tech stack

- Angular 22
- TypeScript
- CSS
- HTML

## Getting started

### Prerequisites

- Node.js and npm

### Install and run

```bash
git clone https://github.com/sandip9938/ANGULAR-COUNTER_APP.git
cd ANGULAR-COUNTER_APP
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The development server reloads the app when source files change.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm test` | Run unit tests with the configured test runner |
| `npm run watch` | Rebuild on source changes using the development configuration |

## Counter behavior

- **Increase** adds one to the current value.
- **Decrease** subtracts one, stopping at zero.
- **Reset counter** sets the value back to zero.

## Project structure

```text
src/
└── app/
    ├── app.ts       # Counter state and actions
    ├── app.html     # Counter interface
    └── app.css      # Component styles
```

## Build

Run `npm run build` to compile the app for production. The generated files are written to `dist/`.
