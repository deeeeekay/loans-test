import { Browser, BrowserContext } from '@playwright/test'

export async function setupContext(browser: Browser): Promise<BrowserContext> {
  return await browser.newContext();
}

export async function teardownContext(context: BrowserContext) {
  await context.close();
}
