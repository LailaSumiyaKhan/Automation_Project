const standardUserLoginObjects = require("./standardUserLoginObjects");
class StandardUserLoginActions {
   async login() {
      await standardUserLoginObjects.userName.setValue("standard_user");
      await standardUserLoginObjects.password.setValue("secret_sauce");
      await standardUserLoginObjects.loginButton.click();
      await browser.pause(2000);
   }
}
module.exports = new StandardUserLoginActions();
