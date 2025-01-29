class Utilities {
   // textToNumber(text) {
   //    return parseFloat(text.replace(/[$,]/g, ""));
   // }
   textToNumber(str) {
      return parseFloat(str.replace(/[^0-9.]/g, ""));
   }
}
module.exports = new Utilities();
