const { test, expect } = require('@playwright/test');

test('Pos_Fun_0017: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`velai thamathamaaga mudinthatahaal `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`வேலை தாமதமாக முடிந்ததனால் `);
});
