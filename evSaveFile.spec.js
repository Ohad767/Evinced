import { test, expect } from '@playwright/test';
import { EvincedSDK } from '@evinced/js-playwright-sdk';
import { existsSync } from 'node:fs';

test.describe('Home Page Accessibility', () => {
  test('Navigate and run evAnalyze + save report', async ({ page }) => {
    const evReport = './test-results/home-evAnalyze.html';
    const evincedService = new EvincedSDK(page);

    await page.goto('https://a11y-audits.com/');

    // 1️⃣ Run accessibility audit
    const issues = await evincedService.evAnalyze({ mode: 'default' });

    // 2️⃣ Save report
    await evincedService.evSaveFile(issues, 'html', evReport);

    // 3️⃣ Verify report file exists
    expect(existsSync(evReport)).toBeTruthy();
  });
});
