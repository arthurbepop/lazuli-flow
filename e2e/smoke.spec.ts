import { expect, test } from "@playwright/test";

const WHATSAPP_URL = "https://wa.me/5551981275158";

test("home loads and main WhatsApp CTA points to the expected destination", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /movimento que transforma\..*equilíbrio que inspira\./i }),
  ).toBeVisible();

  const cta = page.getByRole("link", { name: /agende sua aula experimental/i });
  await expect(cta).toBeVisible();
  await expect(cta).toHaveAttribute("href", WHATSAPP_URL);
});

test("unknown route shows 404 and return button navigates back to home under basename", async ({ page, baseURL }) => {
  const unknownUrl = `${baseURL}/rota-inexistente`;

  await page.goto(unknownUrl);

  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
  await expect(page.getByText(/página não encontrada/i)).toBeVisible();

  await page.getByRole("link", { name: /voltar ao início/i }).click();
  await expect(page).toHaveURL(new RegExp(`${String(baseURL).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/?$`));
  await expect(
    page.getByRole("heading", { name: /movimento que transforma\..*equilíbrio que inspira\./i }),
  ).toBeVisible();
});
