import { expect, Page } from "@playwright/test";
import { click, getText, input, uploadFile } from "../utility/commonMethods";


export class ContactUs{

    readonly page:Page;
    private header:string = "GET IN TOUCH"
    readonly contactUs_Btn = "a[href='/contact_us']"
    readonly formHeader = ".contact-form h2[class='title text-center']";
    readonly contactUsNameField = "input[name='name']";
    readonly contactUsEmailField = "input[name='email']";
    readonly contactUsSubjectField = "input[name='subject']";
    readonly contactUsMessageField = "#message";
    readonly file = "input[name='upload_file']";
    readonly submit_Btn = "input[name='submit']";


    constructor(page:Page){
        this.page = page;
    }


    async fillContactUsForm(){

        await click(this.page,this.contactUs_Btn);
        expect(await getText(this.page,this.formHeader)).toBe(this.header);
        await input({page:this.page,webElement:this.contactUsNameField,inputValue:"JB"});
        await input({page:this.page,webElement:this.contactUsEmailField,inputValue:"10888@gmail.com"});
        await input({page:this.page,webElement:this.contactUsSubjectField,inputValue:"Test"});
        await input({page:this.page,webElement:this.contactUsMessageField,inputValue:"Testing"});

        await uploadFile(this.page,this.file,"MedicalCertificate.pdf");
        await this.page.waitForTimeout(5000);
        await click(this.page,this.submit_Btn);

    }

}