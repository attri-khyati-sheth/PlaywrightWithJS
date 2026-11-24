const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');

  await page.locator('#login-button').click();

  await page.waitForLoadState('networkidle');

  console.log('Login completed');

  // Keep browser open until you press Enter
  await new Promise(resolve => {
    process.stdin.once('data', resolve);
  });

  await browser.close();
})();