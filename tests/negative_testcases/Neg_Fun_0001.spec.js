const { test, expect } = require('@playwright/test');

test('Neg_Fun_0001: Verify conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textarea = page.locator('#transliterateTextarea');
  await textarea.fill('');
  await textarea.type(`nee indaikku evening free ah iruntha evening shopping povam `);
  await page.waitForTimeout(2000);
  const value = await textarea.inputValue();
  expect(value).toContain(`நீ இண்டைக்கு ஈவினிங் பிரீ ஆஹ் இருந்த ஈவினிங் ஷாப்பிங் போவம் `);
});
