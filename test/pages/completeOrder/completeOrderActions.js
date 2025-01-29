const completeOrderObjects = require("./completeOrderObjects");
const productObjects = require("../product/productObjects");
class CompleteOrderActions {
   async successfulOrderMsg() {
      await completeOrderObjects.successfulOrderMsg.getText();

      await browser.pause(3000);
   }
   async clickHamburgerMenu() {
      await productObjects.hamburgerMenu.click();
   }
   async clickOnResetAppState() {
      await productObjects.resetApp.click();
      await browser.pause(1000);
   }
   async clickOnLogoutBtn() {
      await completeOrderObjects.logoutBtn.click();
   }
}
module.exports = new CompleteOrderActions();
