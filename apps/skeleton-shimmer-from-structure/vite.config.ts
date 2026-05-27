import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
    ],
    resolve: {
      tsconfigPaths: true,
    },
    css: {
      modules: {
        generateScopedName:
          mode === "development" || mode === "testing" ? "[name]_[local]_[hash:base64:5]" : "[local]_[hash:base64:5]",
      },
    },
  };
});
