const checkoutObjects = require("./checkoutObjects");
class CheckoutActions {
   async getSauceLabsBackpackName() {
      return await checkoutObjects.sauceLabsBackpackName.getText();
   }
   async getsauceLabsBikeLightName() {
      return await checkoutObjects.sauceLabsBikeLightName.getText();
   }
   async getsauceLabsOnesieName() {
      return await checkoutObjects.sauceLabsOnesieName.getText();
   }
}
module.exports = new CheckoutActions();
