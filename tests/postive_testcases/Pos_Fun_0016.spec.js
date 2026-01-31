const { test, expect } = require('@playwright/test');

test('Pos_Fun_0016: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`nerru malaiyil nanainthathaal enakku fever vanthiddu `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`நேற்று மலையில் நனைந்தால் எனக்கு பிவேர் வந்திட்டு `);
});
