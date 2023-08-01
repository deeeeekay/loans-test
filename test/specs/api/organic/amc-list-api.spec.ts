import { APIResponse, expect } from '@playwright/test';
import { test } from '@loans/test';
import { allure } from 'allure-playwright';
import FLOW from 'test/constants/flow';
import CONSTANTS from '@loans/constants/organic/amcList';
const URL = CONSTANTS.URL + '/amc';

let responseBody;
let response: APIResponse;

test.describe.serial(FLOW.ORGANIC.AMC_LIST, () => {

  test.beforeEach(async () => {
    allure.story(FLOW.ORGANIC.AMC_LIST);
    allure.feature(FLOW.ORGANIC.NAME);
    allure.epic(FLOW.API);
  });

  test('Validate success status', async ({ request }) => {
    const url = `${URL}/crm_user/get/100010`
    response = await request.get(url, { headers: CONSTANTS.HEADERS });
    console.log(response)
    expect(response.ok()).toBeTruthy();
    responseBody = await response.json();
  });
});