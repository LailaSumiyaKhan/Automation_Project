const productObjects = require("./productObjects");
class ProductActions {
   async clickHamburgerMenu() {
      // await productObjects.hamburgerMenu.scrollIntoView();
      // await productObjects.hamburgerMenu.waitForClickable({ timeout: 5000 });
      // const isHamburgerMenuPresent =
      // await productObjects.hamburgerMenu.isExisting();
      // console.log(`Is Hamburger Menu Present: ${isHamburgerMenuPresent}`);
      await productObjects.hamburgerMenu.click();
   }
   async clickOnResetAppState() {
      await productObjects.resetApp.click();
      await browser.pause(3000);
   }
   async clickOnCloseBtn() {
      await productObjects.closeBtn.click();
      await browser.pause(3000);
   }
   async clickOnSauceLabsBackpackAddToCartBtn() {
      await productObjects.sauceLabsBackpackAddToCartBtn.click();
   }
   async clickOnSauceLabsbikelightAddToCartBtn() {
      await productObjects.sauceLabsbikelightAddToCartBtn.click();
   }
   async clickOnSauceLabsOnesieAddToCartBtn() {
      await productObjects.sauceLabsOnesieAddToCartBtn.click();
   }
   async clickOnCartBtn() {
      await productObjects.cartBtn.click();
   }
   async getSauceLabsBackpackExpectedName() {
      return await productObjects.sauceLabsBackpackExpectedName.getText();
   }
   async getSauceLabsbikelightExpectedName() {
      return await productObjects.sauceLabsbikelightExpectedName.getText();
   }
   async getSauceLabsOnesieExpectedName() {
      return await productObjects.sauceLabsOnesieExpectedName.getText();
   }
}
module.exports = new ProductActions();
