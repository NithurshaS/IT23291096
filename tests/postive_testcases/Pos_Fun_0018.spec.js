const { test, expect } = require('@playwright/test');

test('Pos_Fun_0018: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`naan athai seiya mudiyathu `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`நான் அதை செய்ய முடியாது `);
});
