import { Box } from "@components/Layout";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import addonDocs from "@storybook/addon-docs";
import { type Decorator, type Parameters, definePreview } from "@storybook/react-vite";

/**
 * path aliases for css fjles unfortunately
 * are not supported as of now by the vite-tsconfig-paths plugin
 * https://github.com/aleclarson/vite-tsconfig-paths/tree/eec0e9eb646d8122bdf5a352f22090ded6d18569?tab=readme-ov-file#%EF%B8%8F-css-imports-are-not-supported
 */
import "../src/tokens.css";
import addonHtml from "@whitespace/storybook-addon-html";
import { MemoryRouter } from "react-router";

const cache = createCache({
  key: "css",
  stylisPlugins: [], // disables all stylis plugins, including autoprefixer
});

const parameters: Parameters = {
  layout: "centered",
  docs: {
    codePanel: true,
  },
  html: {
    transform: (code: string) => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(code, "text/html");
      const root = dom.documentElement.querySelector("[data-portal-root]");
      return root ? root.innerHTML : code;
    },
  },
};

const decorators: Decorator[] = [
  (Story, context) => {
    const isFullscreen = context.globals.layout === "fullscreen" || context.parameters.layout === "fullscreen";
    return (
      <CacheProvider value={cache}>
        <MemoryRouter>
          <Box padding={isFullscreen ? "2xl" : undefined}>
            <Story />
          </Box>
        </MemoryRouter>
      </CacheProvider>
    );
  },
];

export default definePreview({
  parameters,
  decorators,
  addons: [addonDocs(), addonHtml()],
});
