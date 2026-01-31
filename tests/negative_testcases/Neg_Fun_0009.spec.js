const { test, expect } = require('@playwright/test');

test('Neg_Fun_0009: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`version2 update next month release aagum `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`வெர்ஸின்௨ அப்டேட் நெஸ்ட் மோந்து ரிலீஸ் ஆகும் `);
});
