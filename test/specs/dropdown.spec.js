import { expect } from "@wdio/globals";
import Dropdown from "../pageobjects/dropdown.page.js";
//create a test suite
describe.skip("Selecting options on the dropdown", () => {
  //test to click on option 1
  it("Option 1 has been selected", async () => {
    await Dropdown.open();
    //Checks to see if the dropdown is clickable, then it clicks on it
    await Dropdown.dropdown.isClickable();
    await Dropdown.dropdown.click();
    //await browser.pause(2000);

    //selects option 1
    await Dropdown.dropdown.selectByVisibleText("Option 1");
    //await browser.pause(300);

    await Dropdown.dropdown.click();
   // await browser.pause(300);

    //checks to see if option 1 was selected
    await expect(Dropdown.dropOption1).toBeSelected();
    //await browser.pause(300);
  });

  it("Option 2 has been selected", async () => {
    await Dropdown.dropdown.click();
    //await browser.pause(300);
    //selects option 2
    await Dropdown.dropdown.selectByVisibleText("Option 2");
    //await browser.pause(300);
    //checks to see if option 2 was selected
    await expect(Dropdown.dropOption2).toBeSelected();
    //await browser.pause(300);
  });
});
