const { test, expect } = require('@playwright/test');

test('Pos_Fun_0006: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`enakku uthavi seiya mudiyuma? `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`எனக்கு உதவி செய்ய முடியுமா? `);
});
