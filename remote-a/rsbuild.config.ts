import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact({
      splitChunks: { react: false, router: false },
    }),
    pluginModuleFederation({
      name: `remote_a`,
      dts: false,
      runtimePlugins: [],
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: {
        react: {
          singleton: true,
          shareKey: "react:19.0.0",
          version: "19.0.0",
          requiredVersion: "19.0.0",
        },
        "shared-lib": {
          singleton: true,
          shareKey: "shared-lib:1.0.0@react:19.0.0",
          version: "1.0.0",
          requiredVersion: "1.0.0",
        },
      },
    }),
  ],
  html: { template: "./public/index.html" },
  dev: {
    assetPrefix: "auto",
    client: {
      host: "localhost",
      port: 3001,
    },
  },
  server: {
    port: 3001,
    strictPort: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  output: {
    assetPrefix: "auto",
    sourceMap: { js: "source-map" },
    distPath: { root: `build` },
  },
});
