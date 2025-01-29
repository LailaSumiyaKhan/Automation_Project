const completeOrderObjects = require("./completeOrderObjects");
class CompleteOrderActions {
   async successfulOrderMsg() {
      await completeOrderObjects.successfulOrderMsg.getText();
      await browser.pause(3000);
   }
}
