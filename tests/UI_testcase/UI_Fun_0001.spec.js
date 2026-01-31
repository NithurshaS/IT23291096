const { test, expect } = require('@playwright/test');

test('UI_Fun_0001: Verify real-time update', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type('test ');
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  // Expecting 'test' to convert to 'டெஸ்ட்' (based on previous knowledge)
  // or we can just check it's not empty/english if we want generic UI test.
  // But user said "update correct ah".
  expect(value).toContain('டெஸ்ட்');
});
