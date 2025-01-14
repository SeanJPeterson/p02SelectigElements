import Page from './page.js';
/**
* sub page containing specific selectors and methods for a specific page
*/
class KeyPressesPage extends Page {
 /**
 * define selectors using getter methods
 */
 get keyPressInput() {
    return $(`/html//input[@id='target']`)
 }
 get keyPressResult() {
    return $(`/html//p[@id='result']`)
 }
 async pressAkey (input) {
 await this.keyPressInput.setValue(input);
 }
 /**
 * overwrite specific options to adapt it to page object
 */
 open() {
 return super.open('key_presses');
 }
}
export default new KeyPressesPage();