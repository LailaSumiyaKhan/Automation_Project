const loginObjects = require("./loginObjects");
class LoginActions {
   async login() {
      await loginObjects.userName.setValue("locked_out_user");
      await loginObjects.password.setValue("secret_sauce");
      await loginObjects.loginButton.click();
   }
}
module.exports = new LoginActions();
