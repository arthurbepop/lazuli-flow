import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isRootPagesRepo = repoName?.endsWith(".github.io");
const inferredPagesBase =
  repoName && !isRootPagesRepo ? `/${repoName}/` : "/";
const envBasePath = process.env.BASE_PATH?.trim();
const normalizedEnvBasePath = envBasePath
  ? envBasePath.endsWith("/")
    ? envBasePath
    : `${envBasePath}/`
  : undefined;
const base =
  normalizedEnvBasePath ??
  (process.env.GITHUB_ACTIONS === "true" ? inferredPagesBase : "/");

export default defineConfig({
  base,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
