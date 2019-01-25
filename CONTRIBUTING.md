# Contributing

Thank you for contributing! Here’s some basics about our codebase.

## Quick Start

1. Clone, `cd`
2. `yarn && yarn run dev`
3. Open [localhost:8000](http://localhost:8000) (uses hot reloading)

## Organization

This site is a standard [Gatsby](https://www.gatsbyjs.org) site, so:

- Pages are in `src/pages/`. They use unnamed default exports (e.g.
  `export default () => ()`).
- Components are in `src/components/`. They use named default exports (e.g.
  `class Hello extends Component {}` + `export default Hello`).

## Formatting

In all prose (paragraphs, headings, page descriptions, etc), use rich quotes.

For code formatting, we use [Prettier](https://prettier.io) with options.
Before committing, run `yarn run fmt` and you’re good to go.

## Design System

This site uses the [Hack Club Design System](https://design.hackclub.com) for
all UI primitives (Box, Text, etc).
