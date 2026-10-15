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
- Framework-agnostic, as it's distributed as custom web component

## Downsides

- Skeletons for text blocks are rendered as solid gray boxes
- Often needs placeholder data for proper measurements
- Might have performance implications, as all the measurements happen at runtime and `getBoundingClientRect` calls will cause reflows

## Better in comparison with shimmer-from-structure

- Better API
- Possibility to exclude certain ui elements from being replaced with skeletons, using `data-shimmer-ignore` attribute
- Possibility to emulate text lines using `count` attribute and some additional CSS

```jsx
<phantom-ui loading={isLoading}>
  <Card />
  {isLoading ? (
    <p className={styles.paragraph} data-shimmer-ignore>
      <phantom-ui loading={isLoading} count={5} animation="pulse">
        <span className={styles.line}>&nbsp;</span>
      </phantom-ui>
    </p>
  ) : (
    <p className={styles.paragraph}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
  )}
</phantom-ui>
```

```css
.line {
  display: inline-block;
  text-box-edge: cap alphabetic;
  text-box-trim: trim-both;
  width: 100%;
}
```
