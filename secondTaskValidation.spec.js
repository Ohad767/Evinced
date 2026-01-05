import { test, expect } from '@playwright/test';

test.describe('Home Page Navigation', () => {
  test('Navigate to https://a11y-audits.com/ and check title', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://a11y-audits.com/');

    // Check that the page title contains "Accessibility" or any expected word
    const title = await page.title();
    console.log('Page title:', title);
    expect(title).toContain('Love & Minter'); // Adjust this to a word in the actual title
  });
});
