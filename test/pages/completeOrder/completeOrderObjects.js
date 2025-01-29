class CompleteOrderObjects {
   get successfulOrderMsg() {
      return $("//h2[contains(text(),'Thank you for your order!')]");
   }
}
module.exports = new CompleteOrderObjects();
