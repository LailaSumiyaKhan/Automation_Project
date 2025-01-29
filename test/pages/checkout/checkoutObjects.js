class CheckoutObjects {
   get firstName() {
      return $("//input[@placeholder='First Name']");
   }
   get lastName() {
      return $("//input[@placeholder='Last Name']");
   }
   get postalCode() {
      return $("//input[@placeholder='Zip/Postal Code']");
   }
   get continueButton() {
      return $("//input[@id='continue']");
   }
}
module.exports = new CheckoutObjects();
