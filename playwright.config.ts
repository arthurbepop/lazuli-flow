import { defineConfig } from "@playwright/test";

const basePath = process.env.BASE_PATH ?? "/";
const normalizedBasePath = basePath.endsWith("/") ? basePath : `${basePath}/`;
const port = Number(process.env.PLAYWRIGHT_PORT ?? 4173);

export default defineConfig({
  testDir: "./e2e",
  testIgnore: ["**/src/test/**"],
  reporter: "list",
  use: {
    baseURL: `http://127.0.0.1:${port}${normalizedBasePath === "/" ? "" : normalizedBasePath.slice(0, -1)}`,
  },
  webServer: {
    command: `npm run build && npx vite preview --host 127.0.0.1 --port ${port}`,
    url: `http://127.0.0.1:${port}${normalizedBasePath}`,
    reuseExistingServer: true,
    timeout: 120000,
    env: {
      BASE_PATH: normalizedBasePath,
    },
  },
});
