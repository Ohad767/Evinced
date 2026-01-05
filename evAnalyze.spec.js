import { test, expect } from '@playwright/test';
import { EvincedSDK } from '@evinced/js-playwright-sdk';
import { existsSync } from 'node:fs';

test.describe('Home Page Accessibility', () => {
  test('Navigate and run evAnalyze', async ({ page }) => {
    const evReport = './test-results/home-evAnalyze.html';
    const evincedService = new EvincedSDK(page);

    await page.goto('https://a11y-audits.com/');

    // Run accessibility audit
    const issues = await evincedService.evAnalyze({ mode: 'default' });

    // Save report
    await evincedService.evSaveFile(issues, 'html', evReport);

    // Check that the report file exists
    expect(existsSync(evReport)).toBeTruthy();
  });
});
