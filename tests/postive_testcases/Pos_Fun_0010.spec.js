const { test, expect } = require('@playwright/test');

test('Pos_Fun_0010: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`vakuppu 10 manikku aarampam aakum `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`வகுப்பு ௧௦ மணிக்கு ஆரம்பம் ஆகும் `);
});
