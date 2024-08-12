import { expect } from "@wdio/globals";
import KeyPressesPage from "../pageobjects/keyPress.page.js";


describe("My Key Press application", () => {
  it("should display that the letter that was entered was C", async () => {
    await KeyPressesPage.open();
    //Presses the "C" key
    await KeyPressesPage.pressAkey("C");
    //Checks to see if the letter C was entered
    await expect(KeyPressesPage.keyPressResult).toHaveText(expect.stringContaining('You entered: C'));
  });

  it("should display that the letter that was entered was A", async () => {
    //Presses the "A" key
    await KeyPressesPage.pressAkey("A");
    //Checks to see if the letter A was entered
    await expect(KeyPressesPage.keyPressResult).toHaveText(expect.stringContaining('You entered: A'));
  });


  /*it('Just a little extra thing I made for fun', async () => {
    await KeyPressesPage.open();
    await browser.pause(300)
    await KeyPressesPage.pressAkey("M");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("R");
    await browser.pause(150);
    await KeyPressesPage.pressAkey(".");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("R");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("I");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("C");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("H");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("A");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("R");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("D");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("I");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("S");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("C");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("O");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("O");
    await browser.pause(150);
    await KeyPressesPage.pressAkey("L");
    await browser.pause(150);
  });*/
});
