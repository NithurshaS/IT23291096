const { test, expect } = require('@playwright/test');

test('Pos_Fun_0004: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`naan indaikku kadaikku poka vendum `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`நான் இண்டைக்கு கடைக்கு போக வேண்டும் `);
});
