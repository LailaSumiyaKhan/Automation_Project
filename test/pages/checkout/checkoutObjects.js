class CheckoutObjects {
   get sauceLabsBackpackName() {
      return $("//div[contains(text(),'Sauce Labs Backpack')]");
   }
   get sauceLabsBikeLightName() {
      return $("//div[contains(text(),'Sauce Labs Bike Light')]");
   }
   get sauceLabsOnesieName() {
      return $("//div[contains(text(),'Sauce Labs Onesie')]");
   }
}
module.exports = new CheckoutObjects();
