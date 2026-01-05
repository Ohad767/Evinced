// global.setup.js
const { setCredentials } = require("@evinced/js-playwright-sdk");

async function globalSetup(config) {
    try {
        await setCredentials({
            serviceId: process.env.EVINCED_SERVICE_ID,
            secret: process.env.EVINCED_API_KEY,
        });
        console.log("Evinced SDK authenticated successfully!");
    } catch (error) {
        console.error(error);
        throw new Error("Evinced SDK authorization failure.");
    }
}

module.exports = globalSetup;

