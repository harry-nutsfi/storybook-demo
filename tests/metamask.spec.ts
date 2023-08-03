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

test("connect wallet using default metamask account", async () => {});
