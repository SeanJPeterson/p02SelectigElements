import { expect } from "@wdio/globals";
import Checkboxes from "../pageobjects/checkboxes.page.js";

describe("Checking the second and first checkboxes", () => {
  it("The header exists and is called Checkboxes", async () => {
    await Checkboxes.open();
    //Checks to see if the header exists
    await Checkboxes.heading.isExisting();
    //does the header have the text: "Checkboxes"?
    await expect(Checkboxes.heading).toHaveText("Checkboxes");
  });

  it("Checking Checkbox2 off", async () => {
    //Checks to see if it's clickable
    await Checkboxes.checkbox2.isClickable();
    //clicks the checkbox
    await Checkboxes.checkbox2.click();
    await browser.pause(2000);
    console.log("line 20 " + (await Checkboxes.checkbox2.isSelected()));
    //checks to see if the checkbox is empty
    await expect(Checkboxes.checkbox2).not.toBeSelected();
  });

  it("Checking Checkbox1 on and off", async () => {
    //Checks to see if checkbox1 is clickable
    await Checkboxes.checkbox1.isClickable();
    await Checkboxes.checkbox1.click();
    await browser.pause(500);
    await Checkboxes.checkbox1.click();
    await browser.pause(1000);
    console.log("line 32 " + (await Checkboxes.checkbox1.isSelected()));
    //checks to see if the checkbox is empty
    await expect(Checkboxes.checkbox1).not.toBeSelected();
  });
});
