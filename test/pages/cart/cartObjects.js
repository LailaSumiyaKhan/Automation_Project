class CartObjects {
   get sauceLabsBackpackName() {
      return $("//div[contains(text(),'Sauce Labs Backpack')]");
   }
   get sauceLabsBikeLightName() {
      return $("//div[contains(text(),'Sauce Labs Bike Light')]");
   }
   get sauceLabsOnesieName() {
      return $("//div[contains(text(),'Sauce Labs Onesie')]");
   }
   get checkoutBtn() {
      return $("//button[@id='checkout']");
   }
}
module.exports = new CartObjects();
