# Shimmer-from-structure demo

## Steps required to use the library

- Install the library: `pnpm i @shimmer-from-structure/react --filter=@smashercosmo/skeleton-shimmer-from-structure`
- Import skeleton component: `import { Shimmer } from "@shimmer-from-structure/react";`
- Wrap your content in skeleton: `<Shimmer loading={isLoading} backgroundColor="rgba(0,0,0,0.05)">...</Shimmer>`
- Run the app: `pnpm dev --filter=@smashercosmo/skeleton-shimmer-from-structure`

## Upsides

- Skeletons are automatically generated
- Skeleton styles are completely isolated and don't interfere with the rest of the app
- Has adapters for all major frameworks

## Downsides

- Skeletons for text blocks are rendered as solid gray boxes
- Might have performance implications, as all the measurements happen in runtime and `getBoundingClientRect` calls will cause reflows
