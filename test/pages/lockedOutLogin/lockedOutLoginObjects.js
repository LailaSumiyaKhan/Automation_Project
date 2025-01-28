class LockedOutLoginObjects {
   get userName() {
      return $("//input[@placeholder='Username']");
   }
   get password() {
      return $("//input[@placeholder='Password']");
   }
   get loginButton() {
      return $("//input[@id='login-button']");
   }
   get errorMsg() {
      return $(
         "//h3[contains(text(),'Epic sadface: Sorry, this user has been locked out.')]"
      );
   }
}
module.exports = new LockedOutLoginObjects();
