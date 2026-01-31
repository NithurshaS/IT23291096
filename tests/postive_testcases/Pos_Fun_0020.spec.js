const { test, expect } = require('@playwright/test');

test('Pos_Fun_0020: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`Naan ungalukku vendiya porutkalai vaangi varukiren `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`நான் உங்களுக்கு வேண்டிய பொருட்களை வாங்கி வருகிறேன் `);
});
