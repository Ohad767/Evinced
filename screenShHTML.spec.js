import { test, expect } from '@playwright/test';
import { EvincedSDK } from '@evinced/js-playwright-sdk';
import { existsSync, mkdirSync } from 'node:fs';
import path from 'path';

test.describe('Home Page Accessibility', () => {
  test('Navigate, run evAnalyze, save HTML report, and take screenshots', async ({ page }) => {
    // Report folder
    const reportDir = './test-results';
    const evReport = path.join(reportDir, 'home-evAnalyze.html');

    // Make sure the folder exists
    mkdirSync(reportDir, { recursive: true });

    // Initialize Evinced SDK
    const evincedService = new EvincedSDK(page);

    // 1️⃣ Navigate to the page
    await page.goto('https://a11y-audits.com/');

    // 2️⃣ Take a screenshot
    const screenshotPath = path.join(reportDir, 'homepage.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });

    // 3️⃣ Run accessibility audit
    const issues = await evincedService.evAnalyze({ mode: 'default' });

    // 4️⃣ Save HTML report
    await evincedService.evSaveFile(issues, 'html', evReport);

    // 5️⃣ Verify the report and screenshot exist
    expect(existsSync(evReport)).toBeTruthy();
    expect(existsSync(screenshotPath)).toBeTruthy();

    console.log('✅ Accessibility audit and screenshot saved successfully!');
  });
});
