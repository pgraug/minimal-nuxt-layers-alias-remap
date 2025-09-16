# Nuxt layers aliases not respected in some scenarios

This is a minimal reproduction of a Nuxt 4 app (in sites/dk/) that extends a Nuxt layer (in the root of this repo) and tries to change the aliases so `~/` and `~~/` point to the layer's directory not the dir of the app that extends it (the one that runs when you start the dev server).

It works for import statements but not for `<img src="~/assets/some-image.png">` which doesn't respect the alias change and still points to `sites/dk/assets/some-image.png`.

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```
