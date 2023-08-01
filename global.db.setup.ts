import { expect } from '@playwright/test';
import { test as setup } from '@loans/test';
import { executeQuery } from '@loans/utils/db';

// setup('ensure db-connectivity is proper', async ({ dbPool }) => {
//   let rows = await executeQuery(true, dbPool, "select 1")
//   expect(rows).toBeTruthy();
// });