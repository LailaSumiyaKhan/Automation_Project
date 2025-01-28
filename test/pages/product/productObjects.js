class ProductObjects {
   get hamburgerMenu() {
      return $("//button[@id='react-burger-menu-btn']");
   }
   get resetApp() {
      return $("//a[@id='reset_sidebar_link']");
   }
   get about() {
      return $("//a[@id='about_sidebar_link']");
   }
   get closeBtn() {
      return $("//button[@id='react-burger-cross-btn']");
   }
   get sauceLabsBackpackAddToCartBtn() {
      return $("//button[@id='add-to-cart-sauce-labs-backpack']");
   }
   get sauceLabsbikelightAddToCartBtn() {
      return $("//button[@id='add-to-cart-sauce-labs-bike-light']");
   }
   get sauceLabsOnesieAddToCartBtn() {
      return $("//button[@id='add-to-cart-sauce-labs-onesie']");
   }
   get cartBtn() {
      return $("//a[@class='shopping_cart_link']");
   }
   get sauceLabsBackpackExpectedName() {
      return $("//div[contains(text(),'Sauce Labs Backpack')]");
   }
   get sauceLabsbikelightExpectedName() {
      return $("//div[contains(text(),'Sauce Labs Bike Light')]");
   }
   get sauceLabsOnesieExpectedName() {
      return $("//div[contains(text(),'Sauce Labs Onesie')]");
   }
}
module.exports = new ProductObjects();
