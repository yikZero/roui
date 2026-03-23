import { test, expect } from "@playwright/test"

test.describe("Visual regression", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
    await page.waitForLoadState("networkidle")
  })

  test("full page screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot("full-page.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    })
  })

  test("button variants", async ({ page }) => {
    const section = page
      .locator("section")
      .filter({ hasText: "Button" })
      .first()
    await expect(section).toHaveScreenshot("buttons.png")
  })

  test("form controls", async ({ page }) => {
    const section = page
      .locator("section")
      .filter({ hasText: "Input, Textarea & Select" })
    await expect(section).toHaveScreenshot("form-controls.png")
  })

  test("checkbox switch radio", async ({ page }) => {
    const section = page
      .locator("section")
      .filter({ hasText: "Checkbox, Switch & Radio" })
    await expect(section).toHaveScreenshot("checkbox-switch-radio.png")
  })

  test("card", async ({ page }) => {
    const section = page.locator("section").filter({ hasText: "Card" }).first()
    await expect(section).toHaveScreenshot("card.png")
  })

  test("tabs", async ({ page }) => {
    const section = page.locator("section").filter({ hasText: "Tabs" }).first()
    await expect(section).toHaveScreenshot("tabs.png")
  })

  test("table", async ({ page }) => {
    const section = page.locator("section").filter({ hasText: "Table" }).first()
    await expect(section).toHaveScreenshot("table.png")
  })

  test("alert", async ({ page }) => {
    const section = page.locator("section").filter({ hasText: "Alert" }).first()
    await expect(section).toHaveScreenshot("alert.png")
  })
})
