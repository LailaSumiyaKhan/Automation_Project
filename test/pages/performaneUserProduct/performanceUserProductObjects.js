class PerformanceUserProductObjects {
   get productSortContainer() {
      return $("//select[@class='product_sort_container']");
   }
   get productSortContainerOption() {
      return $("//option[@value='za']");
   }
   get productTitleLink() {
      return $("//a[@id='item_3_title_link']");
   }
   get shoppingCartLink() {
      return $("//a[@class='shopping_cart_link']");
   }
}
module.exports = new PerformanceUserProductObjects();
