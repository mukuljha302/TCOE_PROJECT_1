import { Page } from "@playwright/test";
import HomePage from "./HomePage";



export default class LoginPage{

private readonly usernameInputselector="#username";
private readonly passwordInputselector="#password";
private readonly loginButtonselector="#Login";

constructor( private page:Page){


}


async navigateToLoginPage(){

await this.page.goto("/");

}


async fillUsername(username:string){

await this.page.locator(this.usernameInputselector).fill(username);


}




async fillPassword(password:string){

    await this.page.locator(this.passwordInputselector).fill(password);
    
    
    }



async clickLoginButton(){

await this.page.locator(this.loginButtonselector).click();

// console.error(`Error clicking loginbutton:${error}`)
// throw error;


await this.page.waitForTimeout(10000);

const homePage=new HomePage(this.page);


return homePage;



}

    


}
