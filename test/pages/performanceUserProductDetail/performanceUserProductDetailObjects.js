class PerformanceUserProductDetailObjects {
   get addToCartBtn() {
      return $("//button[@id='add-to-cart']");
   }
   get shoppingCartLink() {
      return $("//a[@class='shopping_cart_link']");
   }
   get productExpectedName() {
      return $("//div[contains(text(),'Test.allTheThings() T-Shirt (Red)')]");
   }
   get productPrice() {
      return $("//div[@class='inventory_details_price']");
   }
}
module.exports = new PerformanceUserProductDetailObjects();
