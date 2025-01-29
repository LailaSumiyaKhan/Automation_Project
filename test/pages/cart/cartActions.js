const cartObjects = require("./cartObjects");
class CartActions {
   async getSauceLabsBackpackName() {
      return await cartObjects.sauceLabsBackpackName.getText();
   }
   async getsauceLabsBikeLightName() {
      return await cartObjects.sauceLabsBikeLightName.getText();
   }
   async getsauceLabsOnesieName() {
      return await cartObjects.sauceLabsOnesieName.getText();
   }
   async clickOnCheckoutBtn() {
      await cartObjects.checkoutBtn.click();
      await browser.pause(3000);
   }
}
module.exports = new CartActions();
