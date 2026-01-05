import { test, expect } from '@playwright/test';
import { existsSync } from 'node:fs';
import { EvincedSDK } from '@evinced/js-playwright-sdk';

test.describe('Evinced evAnalyze', () => {
    test('Run accessibility audit', async ({ page }) => {
        const evReport = './test-results/evAnalyze.html';
        const evincedService = new EvincedSDK(page);

        await page.goto('https://a11y-audits.com/');
        const issues = await evincedService.evAnalyze();
        await evincedService.evSaveFile(issues, 'html', evReport);

        expect(existsSync(evReport)).toBeTruthy();
    });
});
