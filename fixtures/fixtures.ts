import { test as baseTest } from '@playwright/test'
import { loginPage } from '../base/loginPage'
import { homePage } from '../base/homePage'


type myFixture = {
    loginPage: loginPage,
    homePage: homePage
}

export const test = baseTest.extend<myFixture>({
    loginPage: async ({ page }, use) => {
        await use(new loginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new homePage(page));
    },
})

export { loginPage }
