import { $ } from "@wdio/globals";
import Page from "./page.js";

class Dropdown extends Page {
  //We need to open the options for the dropdown first.
  get dropdown() {
    return $("select#dropdown");
  }
  //Gets option 1 of the dropdown
  get dropOption1() {
    return $("select#dropdown > option[value='1']");
  }
  //Gets option 2 of the dropdown
  get dropOption2() {
    return $("select#dropdown > option[value='2']");
  }
  //Opens the dropdown page of the website
  open() {
    return super.open("dropdown");
  }
}
//this allows it to be used by other file
export default new Dropdown();
