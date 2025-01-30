const performanceUserCartObjects = require("./performanceUserCartObjects");
class PerformanceUserCartActions {
   async verifyProductNameInCart() {
      return await performanceUserCartObjects.productActualName.getText();
   }
   async chickOnCheckoutBtn() {
      await performanceUserCartObjects.checkoutBtn.click();
   }
}
module.exports = new PerformanceUserCartActions();
