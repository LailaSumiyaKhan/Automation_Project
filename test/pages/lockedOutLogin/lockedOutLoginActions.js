const lockedOutLoginObjects = require("./lockedOutLoginObjects");
class LockedOutLoginActions {
   async login() {
      await lockedOutLoginObjects.userName.setValue("locked_out_user");
      await browser.pause(2000);
      await lockedOutLoginObjects.password.setValue("secret_sauce");
      await browser.pause(2000);
      await lockedOutLoginObjects.loginButton.click();
      await browser.pause(2000);
   }
}
module.exports = new LockedOutLoginActions();
