import { defineMain } from "@storybook/react-vite/node";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineMain({
  stories: [resolve(__dirname, "..", "./**/*.stories.tsx")],
  addons: ["@storybook/addon-docs", "@whitespace/storybook-addon-html"],
  framework: "@storybook/react-vite",
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractValuesFromUnion: true,
      shouldRemoveUndefinedFromOptional: true,
      shouldExtractLiteralValuesFromEnum: true,
      EXPERIMENTAL_useProjectService: true,
      propFilter: prop => {
        const isResponsive = prop.name.includes(":");

        if (isResponsive) {
          return false;
        }

        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          return !prop.declarations.some(declaration => {
            return declaration.fileName.includes("@types/react");
          });
        }

        return true;
      },
    },
  },
  features: {
    sidebarOnboardingChecklist: false,
  },
});
