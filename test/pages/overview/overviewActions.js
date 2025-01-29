const overviewObjects = require("./overviewObjects");
const utilities = require("../../utility/utilities");
class OverviewActions {
   async getActualTotalPrice() {
      const actualProductPrice = await overviewObjects.totalPrice.getText();
      return utilities.textToNumber(actualProductPrice);
   }
   async getTax() {
      const actualTax = await overviewObjects.tax.getText();
      return utilities.textToNumber(actualTax);
   }
   async clickOnFinishBtn() {
      await overviewObjects.finishBtn.click();
      await browser.pause(3000);
   }
}
module.exports = new OverviewActions();
