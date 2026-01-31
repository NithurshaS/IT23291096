const { test, expect } = require('@playwright/test');

test('Pos_Fun_0011: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`inru nadantha nikazhvu mikavum sirappaaka irunthathu `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`இன்று நடந்த நிகழ்வு மிகவும் சிறப்பாக இருந்தது `);
});
