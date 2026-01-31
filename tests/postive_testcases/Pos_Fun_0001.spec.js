const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`naan indaikku kovil ponen `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`நான் இண்டைக்கு கோவில் போனேன் `);
});
