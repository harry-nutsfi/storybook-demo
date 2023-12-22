import { Button } from "@/app/components/Button";
import { expect, test } from "@playwright/experimental-ct-react";


test.describe("Button Primary", () => {
  let component: any;

  test.beforeEach(async ({ mount }) => {
    component = await mount(
      <Button label="ok" />
    );
  });

  test("should contain correct name", async () => {
    await expect(component).toContainText("ok Harry 99");
  });
});