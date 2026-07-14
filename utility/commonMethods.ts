import { Dialog, expect,Page } from "@playwright/test";
import path from "path";


export async function input(params:{page:Page,webElement:string, inputValue:string}) {
   await params.page.locator(params.webElement).fill(params.inputValue);

}

export async function click(page:Page,webElement:string){
    await waitForElement(page,webElement);
    await page.locator(webElement).click();
}

export async function waitForElement(page:Page,webElement:string){
   await expect(page.locator(webElement)).toBeVisible();
}

export async function uploadFile(page:Page,webElement:string,fileNameWithExtension:string) {
    const filePath = path.resolve(__dirname, "..", "filesToUpload", fileNameWithExtension);
    await page.setInputFiles(webElement, filePath, { timeout: 3000 });
}

export async function getText(page:Page,webElement:string):Promise<string> {
   return await page.locator(webElement).innerText();
   
}

export async function alertHandle(page:Page) {
     page.on("dialog",async(dialog:Dialog)=>{
      await dialog.accept();
      console.log("Alert accepted");
   })  
}