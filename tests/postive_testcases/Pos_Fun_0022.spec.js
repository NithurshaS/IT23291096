const { test, expect } = require('@playwright/test');

test('Pos_Fun_0022: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`dai inga vaa da `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`டாய் இங்க வாட `);
});
