const performanceGlitchUserLoginObjects = require("./performanceGlitchUserLoginObjects");
class PerformanceGlitchUserLoginActions {
   async login() {
      await performanceGlitchUserLoginObjects.userName.setValue(
         "performance_glitch_user"
      );
      await performanceGlitchUserLoginObjects.password.setValue("secret_sauce");
      await performanceGlitchUserLoginObjects.loginButton.click();
      await browser.pause(1000);
   }
}
module.exports = new PerformanceGlitchUserLoginActions();
