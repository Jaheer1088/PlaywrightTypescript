import { test as baseTest } from '@playwright/test'
import { loginPage } from '../base/loginPage'
import { homePage } from '../base/homePage'
import { ContactUs } from '../pages/contactUs'


type myFixture = {
    loginPage: loginPage,
    homePage: homePage,
    contactUs:ContactUs
}

export const test = baseTest.extend<myFixture>({
    loginPage: async ({ page }, use) => {
        await use(new loginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new homePage(page));
    },

    contactUs:async({page},use) => {
        await use(new ContactUs(page));
    }
})

export { loginPage }
