import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import { decrypt, encrypt } from "../utils/CryptojsUtil";


test("test",async ({page})=>{


const loginPage=new LoginPage(page);

await loginPage.navigateToLoginPage();
await loginPage.fillUsername("mukuljha302-jcw1@force.com");
await loginPage.fillPassword("Mukul392@");


const homePage= await loginPage.clickLoginButton();
//await page.waitForTimeout(15000);

await homePage.expectServiceTitleToBeVisible();

})


test("Sample env test", ({page})=>{
    console.log(process.env.NODE_ENV);
    console.log(process.env.password);
    console.log(process.env.username);
    
    
    
    })
    

    test("Encryption test",async({page})=> {
const plainText="Hello, Mars!";
const encryptedText=encrypt(plainText);
console.log("SALT",process.env.SALT);
console.log("Encrypted",encryptedText);
const decryptedText= decrypt(encryptedText);
console.log("Decrypted",decryptedText);

    });
    