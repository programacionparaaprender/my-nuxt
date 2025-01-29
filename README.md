# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

###
>- npx nuxi init my-nuxt-app
>- cd my-nuxt-app
>- npm install
>- npm run dev

# Crear una nueva página
mkdir pages
echo "<template><h1>Home Page</h1></template>" > pages/index.vue
echo "<template><h1>About Page</h1></template>" > pages/about.vue

# ejemplo de rutas en nuxt
>- https://nuxt.com/docs/examples/routing/pages

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
