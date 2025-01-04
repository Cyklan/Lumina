import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import assetpackPlugin from "./vite/assetpack"

export default defineConfig({
  plugins: [tsconfigPaths(), assetpackPlugin()],
});
