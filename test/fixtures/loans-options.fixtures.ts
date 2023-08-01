import { test as base } from '@playwright/test';

import { Pool} from 'pg'

export type LOANSOptions = {
  isB2C: boolean,
  dbPool: Pool,
};

export const test = base.extend<LOANSOptions>({
  isB2C: [true, { option: true }],
});

