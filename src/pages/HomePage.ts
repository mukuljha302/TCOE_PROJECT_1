import {Page,expect} from "@playwright/test";


export default class HomePage{

private readonly buyNowLocator ="Buy Now";

constructor(private page:Page){





}

async expectServiceTitleToBeVisible(){

await expect(this.page.getByTitle(this.buyNowLocator)).toBeVisible({timeout:10000});

}


}