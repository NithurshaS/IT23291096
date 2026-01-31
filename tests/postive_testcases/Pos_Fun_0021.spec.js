const { test, expect } = require('@playwright/test');

test('Pos_Fun_0021: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`naan sappidden, aanal pasikkuthu `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`நான் சாப்பிடடேன், அனால் பசிக்குது `);
});
