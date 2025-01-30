class PerformanceGlitchUserLoginObjects {
   get userName() {
      return $("//input[@placeholder='Username']");
   }
   get password() {
      return $("//input[@placeholder='Password']");
   }
   get loginButton() {
      return $("//input[@id='login-button']");
   }
}
module.exports = new PerformanceGlitchUserLoginObjects();
