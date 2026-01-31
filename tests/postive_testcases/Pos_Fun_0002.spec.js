const { test, expect } = require('@playwright/test');

test('Pos_Fun_0002: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`enakku saappaadu vendum `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`எனக்கு சாப்பாடு வேண்டும் `);
});
