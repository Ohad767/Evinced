// tests/ohad.spec.js
import { test } from '@playwright/test';

test.describe('Home Page Navigation', () => {
  test('Navigate to https://a11y-audits.com/', async ({ page }) => {
    // Go to the home page
    await page.goto('https://a11y-audits.com/');
  });
});
