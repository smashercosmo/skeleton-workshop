# MaterialUI demo

## Steps required to use the library

- Install the library: `pnpm i @mui/material @mui/styled-engine-sc @emotion/styled --filter=@smashercosmo/skeleton-material-ui`
- Import skeleton component: `import { Skeleton } from "@mui/material";`
- Render skeletons instead of your content when data is being loaded: `{isLoading ? <Skeleton variant="rectangular" /> : (...)}`
- Run the app: `pnpm dev --filter=@smashercosmo/skeleton-material-ui`

## Upsides

- The simplest possible solution
- Provides the best performance, as no measurements or element cloning are required

## Downsides

- A looooot of manual work is required
