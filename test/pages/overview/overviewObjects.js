class OverviewObjects {
   get totalItem() {
      return $("//div[@class='summary_subtotal_label']");
   }

   get tax() {
      return $("//div[@class='summary_tax_label']");
   }

   get totalPrice() {
      return $("//div[@class='summary_total_label']");
   }
   get finishBtn() {
      return $("//button[@id='finish']");
   }
}
module.exports = new OverviewObjects();
