const utilities = require("../../utility/utilities");
const performanceUserProductDetailObjects = require("./performanceUserProductDetailObjects");
class PerformanceUserProductDetailActions {
   async clickOnAddToCartBtn() {
      await performanceUserProductDetailObjects.addToCartBtn.click();
   }
   async clickOnShoppingCartLink() {
      await performanceUserProductDetailObjects.shoppingCartLink.click();
   }
   async getProductExpectedName() {
      return await performanceUserProductDetailObjects.productExpectedName.getText();
   }
   async getProductPrice() {
      const productPrice =
         await performanceUserProductDetailObjects.productPrice.getText();
      return utilities.textToNumber(productPrice);
   }
}
module.exports = new PerformanceUserProductDetailActions();
