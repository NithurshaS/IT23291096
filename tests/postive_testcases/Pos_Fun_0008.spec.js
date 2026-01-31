const { test, expect } = require('@playwright/test');

test('Pos_Fun_0008: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`unakkku enna saappaadu pidikkum `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`உனக்கு என்ன சாப்பாடு பிடிக்கும் `);
});
