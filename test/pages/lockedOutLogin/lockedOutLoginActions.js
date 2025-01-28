const lockedOutLoginObjects = require("./lockedOutLoginObjects");
class LockedOutLoginActions {
   async login() {
      await lockedOutLoginObjects.userName.setValue("locked_out_user");
      await lockedOutLoginObjects.password.setValue("secret_sauce");
      await lockedOutLoginObjects.loginButton.click();
   }
}
module.exports = new LockedOutLoginActions();
