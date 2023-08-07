import { Page } from "@playwright/test";
import { test, expect } from "./fixtures";
import * as metamask from "@synthetixio/synpress/commands/metamask";

let sharedPage: Page;

test.describe.configure({ mode: "serial" });

test.beforeAll(async ({ page }) => {
  sharedPage = page;
  await sharedPage.goto("/");
});

test.afterAll(async ({ context }) => {
  await context.close();
});

test("connect wallet using default metamask account", async () => {
  await sharedPage.getByRole("button", { name: "Connect wallet" }).click();
  await metamask.acceptAccess();
  await expect(await sharedPage.locator("h5")).toContainText("Connected");
});

test("disconnect wallet ", async () => {
  await sharedPage.getByRole("button", { name: "Disconnect" }).click();
  await expect(
    await sharedPage.getByRole("button", { name: "Connect wallet" })
  ).toBeVisible();
});

test("disconnect wallet and import new one", async () => {
  await metamask.disconnectWalletFromAllDapps();
  await metamask.importAccount(
    "0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97"
  );
  await sharedPage.getByRole("button", { name: "Connect wallet" }).click();
  await metamask.acceptAccess();
  await expect(await sharedPage.locator("h5")).toContainText("Connected");
});
