const { test, expect } = require('@playwright/test');

test('Pos_Fun_0003: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`avar oru nalla manithar `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`அவர் ஒரு நல்ல மனிதர் `);
});
