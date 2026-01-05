import { test } from '@playwright/test';
import { EvincedSDK } from '@evinced/js-playwright-sdk';

test('Check Evinced SDK authentication', async ({ page }) => {
  const evincedService = new EvincedSDK(page);

  try {
    // try a simple page analysis to verify authentication
    await page.goto('https://a11y-audits.com/');
    await evincedService.evAnalyze();
    console.log('✅ Evinced SDK authentication succeeded!');
  } catch (err) {
    console.error('❌ Evinced SDK authentication failed:', err.message);
  }
});

