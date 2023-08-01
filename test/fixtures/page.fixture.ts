import { BrowserContext, Page } from '@playwright/test'

export async function setupPage(context: BrowserContext): Promise<Page> {
  return await context.newPage();
}

export async function teardownPage(page: Page) {
  await page.close();
}

