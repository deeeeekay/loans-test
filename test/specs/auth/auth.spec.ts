import { Browser, BrowserContext, Page, expect, test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { setupBrowser, teardownBrowser } from '../../fixtures/browser.fixture';
import { setupContext, teardownContext } from '../../fixtures/context.fixture';
import { setupPage, teardownPage } from '../../fixtures/page.fixture';
import { getOTP } from '../../utils/login';

import FLOW from 'test/constants/flow';
import Navigate from 'test/utils/navigate';

var browser: Browser;
let context: BrowserContext;
let page: Page;

const mailServerID = process.env.LOANS_TEST_EMAIL_SERVERID;
const mobileNr = process.env.LOANS_TEST_MOBILE;
const mailApiKey = process.env.LOANS_TEST_EMAIL_APIKEY;

test.describe.serial(FLOW.AUTHENTICATION, () => {
	test.beforeAll(async () => {
		browser = await setupBrowser();
		context = await setupContext(browser);
		page = await setupPage(context);
		await Navigate.toLogin(page);
	});

	test.beforeEach(async () => {
		allure.epic(FLOW.AUTHENTICATION);
	});

	test('Perform login process (mobile, otp)', async () => {
		if (!mobileNr || !mailApiKey || !mailServerID) {
			throw new Error('env variables LOANS_TEST_MOBILE, LOANS_TEST_EMAIL_APIKEY LOANS_TEST_EMAIL_SERVERID are not set')
		}
		await page.getByPlaceholder('Mobile Number').fill(mobileNr);
		await page.getByRole('button', { name: 'PROCEED' }).click();
		await page.getByPlaceholder('Enter OTP').click();
		const otp = await getOTP(mailApiKey, mailServerID);
		await page.getByPlaceholder('Enter OTP').fill(otp!);
		await page.getByRole('button', { name: 'PROCEED' }).click();
	});

	test('Validate post login page', async () => {
		await expect(page.getByText("Discover Mutual Funds")).toBeVisible();
	});

	test('Validate logout process', async () => {
		await page.locator("//section[contains(@class,'p-2 pl-4')]/article/*").last().click();
		await page.getByText('Logout').click();
		await expect(page.getByText("Log out from Angel One?")).toBeVisible();
		await page.getByRole('button', { name: 'YES' }).click();
	});

	test.afterAll(async () => {
		await teardownPage(page);
		await teardownContext(context);
		await teardownBrowser(browser);
	});
})