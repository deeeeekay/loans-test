import { chromium, Browser } from '@playwright/test'

export async function setupBrowser(): Promise<Browser> {
    const browser = await chromium.launch();
    return browser;
}

export async function teardownBrowser(browser: Browser) {
    await browser.close();
}
