import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact({
      splitChunks: { react: false, router: false },
    }),
    pluginModuleFederation({
      name: `remote_b`,
      dts: false,
      runtimePlugins: [],
      exposes: {
        "./App": "./src/App.tsx",
      },
      shareScope: "legacy",
      shared: {
        react: {
          singleton: true,
          shareKey: "react:18.3.1",
          shareScope: "legacy",
          version: "18.3.1",
          requiredVersion: "18.3.1",
        },
        "shared-lib": {
          singleton: true,
          shareKey: "shared-lib:1.0.0",
          shareScope: "legacy",
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
      port: 3002,
    },
  },
  server: {
    port: 3002,
    strictPort: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  output: {
    assetPrefix: "auto",
    sourceMap: { js: "source-map" },
    distPath: { root: `build` },
  },
});
