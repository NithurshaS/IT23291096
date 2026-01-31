const { test, expect } = require('@playwright/test');

test('Neg_Fun_0003: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`naan email la news anuppuran `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`நான் ஈமெயில் ல நியூஸ் அனுப்புறேன் `);
});
