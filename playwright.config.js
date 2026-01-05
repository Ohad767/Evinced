// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    testDir: './tests',                       // where test files are
    timeout: 30000,                           // optional per-test timeout
    globalSetup: require.resolve('./global.setup.js'),  // points to our global setup
};

module.exports = config;

