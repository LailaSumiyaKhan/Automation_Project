class CompleteOrderObjects {
   get successfulOrderMsg() {
      return $("//h2[contains(text(),'Thank you for your order!')]");
   }
   get logoutBtn() {
      return $("//a[@id='logout_sidebar_link']");
   }
}
module.exports = new CompleteOrderObjects();
