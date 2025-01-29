const checkoutObjects = require("./checkoutObjects");
const CheckoutObjects = require("./checkoutObjects");
class CheckoutActions {
   async getYourInformation() {
      await checkoutObjects.firstName.setValue("Laila Sumiya");
      await browser.pause(2000);
      await checkoutObjects.lastName.setValue("Khan");
      await browser.pause(2000);
      await checkoutObjects.postalCode.setValue("1215");
      await browser.pause(2000);
      await checkoutObjects.continueButton.click();
      await browser.pause(3000);
   }
}
module.exports = new CheckoutActions();
