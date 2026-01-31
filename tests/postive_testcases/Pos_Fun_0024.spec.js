const { test, expect } = require('@playwright/test');

test('Pos_Fun_0024: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`ithudan inraiya vaalai `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`இத்துடன் இன்றைய வாழை `);
});
