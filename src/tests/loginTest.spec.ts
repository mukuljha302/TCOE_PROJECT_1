import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

test.skip("test",async ({page})=>{


const loginPage=new LoginPage(page);

await loginPage.navigateToLoginPage();
await loginPage.fillUsername(username);
await loginPage.fillPassword(password);


const homePage= await loginPage.clickLoginButton();
//await page.waitForTimeout(15000);

await homePage.expectServiceTitleToBeVisible();

})


test("Sample env test", ({page})=>{
    console.log(process.env.NODE_ENV);
    console.log(process.env.password);
    console.log(process.env.username);
    
    
    
    })
    
    