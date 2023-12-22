import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("has main content", async ({ page }) => {
  const main = page.locator(".target");
  await expect(main).toHaveText("Harry");
});

test("has second content", async ({ page }) => {
  const second = page.locator(".last");
  await expect(second).toHaveText("Dong");
});
