const performanceUserProductObjects = require("./performanceUserProductObjects");
class PerformanceUserProductActions {
   async clickOnProductSortContainer() {
      await performanceUserProductObjects.productSortContainer.click();
   }
   async clickOnProductSortContainerOption() {
      await performanceUserProductObjects.productSortContainerOption.click();
   }
   async clickOnProductLink() {
      await performanceUserProductObjects.productTitleLink.click();
   }
}
module.exports = new PerformanceUserProductActions();
