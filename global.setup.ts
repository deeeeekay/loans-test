import { test as setup, expect } from '@playwright/test';
import { generateToken } from 'test/utils/token';
import { allure } from 'allure-playwright';
// import FLOW from '@loans/constants/flow';
import FLOW from 'test/constants/flow';

setup('Validate if generated token is valid', async ({ page }) => {
  allure.epic(FLOW.AUTHENTICATION);
  process.env.B2C_AUTH_TOKEN = await newToken(true);
  process.env.B2B_AUTH_TOKEN = await newToken(false);
});

async function newToken(isB2C: boolean): Promise<string> {
  let token = await generateToken(isB2C);
  expect(token).toBeTruthy();
  if (process.env.DEBUG) {
    console.log("B2C: " + isB2C + "; Token: " + token);
  }
  return token;
}