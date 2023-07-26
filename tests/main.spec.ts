import { test, expect } from "@playwright/test";

test("has main content", async ({ page }) => {
  await page.goto("/");
  const main = page.locator(".target");
  await expect(main).toHaveText("Harry");
});
