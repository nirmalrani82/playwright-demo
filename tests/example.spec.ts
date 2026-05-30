import { test, expect } from '@playwright/test';

test('understand fixtures', async ({ page, browser }) => {

	console.log(browser);

  	await page.goto('https://playwright.dev/');

	console.log("Another hello world");

  	await expect(page).toHaveTitle(/Playwright/);
});