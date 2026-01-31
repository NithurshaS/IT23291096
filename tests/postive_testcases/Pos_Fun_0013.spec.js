const { test, expect } = require('@playwright/test');

test('Pos_Fun_0013: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`naan padikiran `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`நான் படிக்கிறான் `);
});
