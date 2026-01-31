const { test, expect } = require('@playwright/test');

test('Neg_Fun_0007: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`!@#$% `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`!@#$% `);
});
