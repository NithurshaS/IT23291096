const { test, expect } = require('@playwright/test');

test('Pos_Fun_0009: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`aduththa maatham naan veliyur sella ullen `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`அடுத்த மாதம் நான் வெளியூர் செல்ல உள்ளேன் `);
});
