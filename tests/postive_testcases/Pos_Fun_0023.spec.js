const { test, expect } = require('@playwright/test');

test('Pos_Fun_0023: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`unathu tholaippesi kaanamal poi vittatha `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`உனது தொலைப்பேசி காணாமல் பொய் விட்டதா `);
});
