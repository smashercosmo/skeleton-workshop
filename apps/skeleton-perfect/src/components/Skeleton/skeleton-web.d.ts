import "reac/jsx-runtime";

declare module "react/jsx-runtime" {
  export namespace JSX {
    interface IntrinsicElements {
      "skeleton-web": {
        loading?: boolean;
        children?: unknown;
      };
    }
  }
}
