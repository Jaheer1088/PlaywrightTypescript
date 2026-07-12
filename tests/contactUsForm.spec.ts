
import { homePage } from "../base/homePage";
import { loginPage } from "../base/loginPage";
import { test } from "../fixtures/fixtures";
import { ContactUs } from "../pages/contactUs";



test.describe("Contact Us form Test cases", async() => {

    test.beforeEach("Login To application" , async({page,loginPage}) => {
        await loginPage.login("10888@gmail.com", "12345");

    })

    test.afterEach("closing the browser" , async({page})=>{
       await page.close();
    })

    test("contact us form vvalidation" , async({page,loginPage,homePage,contactUs})=>{
        await contactUs.fillContactUsForm();

    })
})