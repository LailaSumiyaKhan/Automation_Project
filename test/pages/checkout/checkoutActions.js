const checkoutObjects = require("./checkoutObjects");
const CheckoutObjects = require("./checkoutObjects");
class CheckoutActions {
   async getYourInformation() {
      await checkoutObjects.firstName.setValue("Laila Sumiya");
      await checkoutObjects.lastName.setValue("Khan");
      await checkoutObjects.postalCode.setValue("1215");
      await checkoutObjects.continueButton.click();
      await browser.pause(3000);
   }
}
module.exports = new CheckoutActions();
