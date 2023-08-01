import { category } from '@loans/constants/organic/categoryDetails';
import { Page } from '@playwright/test';

const DEBUG = process.env.DEBUG;
const BASE_CONTEXT_PATH = process.env.BASE_CONTEXT_PATH
const LOGIN_PATH = process.env.LOGIN_PATH;
const DISCOVER_PATH = process.env.DISCOVER_PATH
const NFO = process.env.NFO
const SIPCALCULATOR = process.env.SIPCALCULATOR
const INVESTMENTS_PATH = process.env.INVESTMENTS_PATH
const EXPLORE_PATH = process.env.EXPLORE_PATH
const SCHEMES_PATH = process.env.SCHEMES_PATH
const ORDERS_BOOK_PATH = process.env.ORDERS_BOOK_PATH
const SIP_BOOK_PATH  = process.env.SIP_BOOK_PATH
const CART_PATH = process.env.CART_PATH
const CART_CONFIRM_PATH = process.env.CART_CONFIRM_PATH
const INVESTMENT_SCHEMES_B2C_URL = process.env.INVESTMENT_SCHEMES_B2C_URL
const INVESTMENT_SCHEMES_B2B_URL = process.env.INVESTMENT_SCHEMES_B2B_URL



export default class Navigate {
  static async toLogin(page: Page) {
    await Navigate.goto(page, `${LOGIN_PATH}`);
  }

  static async toDiscover(page: Page) {
    await Navigate.goto(page, `${DISCOVER_PATH}`);
  }

  static async toInvestments(page: Page) {
    await Navigate.goto(page, `${INVESTMENTS_PATH}`);
  }

  static async toCategory(page: Page, category: string) {
    await Navigate.goto(page, `${EXPLORE_PATH}${process.env[category]}`);
  }

  static async toNFO(page: Page) {
    await Navigate.goto(page, `${NFO}`);
  }

  static async toSIPCalculator(page: Page) {
    await Navigate.goto(page, `${SIPCALCULATOR}`);
  }

  static async toScheme(page: Page, schemePath: string) {
    await Navigate.goto(page, `${SCHEMES_PATH}${process.env[schemePath]}`);
  }

  static async toOrdersBook(page: Page) {
    await Navigate.goto(page, `${ORDERS_BOOK_PATH}`);
  }

  static async toSIPBook(page: Page){
    await Navigate.goto(page, `${SIP_BOOK_PATH}`);
  }

  static async toCartPage(page: Page) {
    await Navigate.goto(page, `${CART_PATH}`);
  }

  static async toCartConfirmPage(page: Page) {
    await Navigate.goto(page, `${CART_PATH}${CART_CONFIRM_PATH}`);
  }

  static async toInvestmentSchemeUrl(page: Page,isB2C: boolean) {
    if(isB2C === true){
      await Navigate.goto(page, `${SCHEMES_PATH}${INVESTMENT_SCHEMES_B2C_URL}`);
    }

    else{
      await Navigate.goto(page, `${SCHEMES_PATH}${INVESTMENT_SCHEMES_B2B_URL}`);
    }
  }

  static async goto(page: Page, relativePath: string, timeout = 10000) {
    await page.goto(`${BASE_CONTEXT_PATH}${relativePath}`, { waitUntil: 'networkidle', timeout: timeout * 1000 });
  }
}
