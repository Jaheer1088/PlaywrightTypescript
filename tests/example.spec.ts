import {expect } from '@playwright/test';
import {test} from '../fixtures/fixtures'


test('has title', async ({ page, loginPage }) => {
  await loginPage.login("10888@gmail.com", "12345");
  console.log("DONE");
});



