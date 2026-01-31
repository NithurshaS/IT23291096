const { chromium } = require('@playwright/test');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://tamil.changathi.com/');
    await page.fill('#transliterateTextarea', 'dai inga vaa da ');
    await page.waitForTimeout(2000);
    const val = await page.inputValue('#transliterateTextarea');
    console.log('ACTUAL:', val);
    await browser.close();
})();
