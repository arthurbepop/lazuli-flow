import { defineConfig } from "@playwright/test";

export default defineConfig({
  // Keep this minimal until dedicated E2E tests are added.
  testDir: "./e2e",
  testIgnore: ["**/src/test/**"],
  reporter: "list",
});
