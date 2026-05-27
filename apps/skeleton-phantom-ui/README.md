# PhantomUI demo

## Steps required to use the library

- Install the library: `pnpm i @aejkatappaja/phantom-ui --filter=@smashercosmo/skeleton-phantom-ui`
- Import skeleton component: `import "@aejkatappaja/phantom-ui";`
- Wrap your content in skeleton: `<phantom-ui loading={isLoading} animation="pulse">...</phantom-ui>`
- Run the script to generate types for the `phantom-ui` custom element (from the `apps/skeleton-phantom-ui` directory): `pnpx @aejkatappaja/phantom-ui init`
- Run the app: `pnpm dev --filter=@smashercosmo/skeleton-phantom-ui`

## Upsides

- Skeletons are automatically generated
- Skeleton styles are completely isolated and don't interfere with the rest of the app
- Framework-agnostic as it uses custom elements and shadow DOM

## Downsides

- Skeletons for text blocks are rendered as solid gray boxes
- Might have performance implications, as all the measurements happen in runtime and `getBoundingClientRect` calls will cause reflows
