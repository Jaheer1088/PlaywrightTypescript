import { expect,Page } from "@playwright/test";


export async function input(params:{page:Page,webElement:string, inputValue:string}) {
   await waitForElement(params.page,params.webElement);
   await params.page.locator(params.webElement).fill(params.inputValue);

}

export async function click(page:Page,webElement:string){
    await waitForElement(page,webElement);
    await page.locator(webElement).click();
}

export async function waitForElement(page:Page,webElement:string){
   await expect(page.locator(webElement)).toBeVisible();
}