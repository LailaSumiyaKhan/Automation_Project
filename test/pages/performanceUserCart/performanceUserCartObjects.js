class performanceUserCartObjects {
   get productActualName() {
      return $("//div[contains(text(),'Test.allTheThings() T-Shirt (Red)')]");
   }
   get checkoutBtn() {
      return $("//button[@id='checkout']");
   }
}
module.exports = new performanceUserCartObjects();
