# Boneyard-js demo

## Steps required to use the library

- Install the library: `pnpm i boneyard-js --filter=@smashercosmo/skeleton-boneyard`
- Import skeleton component: `import { Skeleton } from "boneyard-js/react";`
- Wrap your content in skeleton: `<Skeleton loading={isLoading} name="card">...</Skeleton>`
- Run the app: `pnpm dev --filter=@smashercosmo/skeleton-boneyard`
- Run the script to generate skeletons (from the `apps/skeleton-boneyard` directory): `npx boneyard-js build http://localhost:5173`
- Import generated file: `import './bones/registry';`

## Upsides

- Skeletons are automatically generated (has `watch` mode and also Vite plugin)
- Faster initial loading as all the measurements are performed during the build time, though library still uses ResizeObserver to update skeletons when layout changes
- Skeleton styles are completely isolated and don't interfere with the rest of the app
- Has adapters for all major frameworks

## Downsides

- Skeletons for text blocks are rendered as solid gray boxes
- It's all or nothing: you can't exclude certain ui elements from being replaced with skeletons
- Some rendering issues: for example, in the current demo the root container background disappears when the skeleton is rendered
