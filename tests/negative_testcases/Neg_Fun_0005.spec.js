const { test, expect } = require('@playwright/test');

test('Neg_Fun_0005: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`meeting 7.30 AM ku start aagum `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`மீட்டிங் ௭.௩௦ அம கு ஸ்டார்ட் ஆகும் `);
});
