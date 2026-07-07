import { Page } from "@playwright/test";
import { click, input } from "../utility/commonMethods"

export class loginPage{

    readonly page:Page
    readonly loginEmail = "form[action = '/login'] input[type = 'email']";
    readonly loginPassword = "form[action = '/login'] input[type = 'password']";
    readonly loginSubmit = "form[action = '/login'] button[type = 'submit']"


   constructor(page:Page){
    this.page = page;
   }

   async login(userName:string,password:string){
    await this.page.goto("https://automationexercise.com/login");
    await input({page:this.page,webElement:this.loginEmail,inputValue:userName});
    await input({page:this.page,webElement:this.loginPassword,inputValue:password});
    await click(this.page,this.loginSubmit);
   }

  
}
