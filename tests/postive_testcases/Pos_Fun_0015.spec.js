const { test, expect } = require('@playwright/test');

test('Pos_Fun_0015: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`namathu aluvaalakaththil thalaippu mikavum `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`நமது அலுவலகத்தில் தலைப்பு மிகவும் `);
});
