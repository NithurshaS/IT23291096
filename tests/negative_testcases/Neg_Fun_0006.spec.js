const { test, expect } = require('@playwright/test');

test('Neg_Fun_0006: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`meeting 25/12/2025 ku iruku `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`மீட்டிங் ௨௫/௧௨/௨௦௨௫ கு இருக்கு `);
});
