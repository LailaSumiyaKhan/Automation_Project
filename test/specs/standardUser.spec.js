const standardUserLoginActions = require("../pages/standardUserLogin/standardUserLoginActions");
const productActions = require("../pages/product/productActions");
const checkoutActions = require("../pages/checkout/checkoutActions");
const chaiExpect = require("chai").expect;
let sauceLabsBackpackExpectedName = "";
let sauceLabsBikeLightExpectedName = "";
let sauceLabsOnesieExpectedName = "";
describe("Standard user product purchase journey", () => {
   it("should login with valid credentials ", async () => {
      await standardUserLoginActions.login();
   });
   it("should click on hamburger menu", async () => {
      await productActions.clickHamburgerMenu();
   });
   it("should click on reset app state", async () => {
      const currentUrl = await browser.getUrl();
      // console.log(currentUrl);
      await productActions.clickOnResetAppState();
      const newUrl = await browser.getUrl();
      // console.log(newUrl);
      await productActions.clickOnCloseBtn();
      chaiExpect(currentUrl).to.not.equal(newUrl);
   });
   it("add 3 products", async () => {
      sauceLabsBackpackExpectedName =
         await productActions.getSauceLabsBackpackExpectedName();
      sauceLabsBikeLightExpectedName =
         await productActions.getSauceLabsbikelightExpectedName();
      sauceLabsOnesieExpectedName =
         await productActions.getSauceLabsOnesieExpectedName();
      await productActions.clickOnSauceLabsBackpackAddToCartBtn();
      await browser.pause(2000);
      await productActions.clickOnSauceLabsbikelightAddToCartBtn();
      await browser.pause(2000);
      await productActions.clickOnSauceLabsOnesieAddToCartBtn();
      await browser.pause(5000);
      await productActions.clickOnCartBtn();
      await browser.pause(4000);
   });
   it("verify product's name", async () => {
      const actualSauceLabsBackpackName =
         await checkoutActions.getSauceLabsBackpackName();
      const actualSauceLabsBikeLightName =
         await checkoutActions.getsauceLabsBikeLightName();
      const actualSauceLabsOnesieName =
         await checkoutActions.getsauceLabsOnesieName();
      chaiExpect(sauceLabsBackpackExpectedName).to.include(
         actualSauceLabsBackpackName
      );
      chaiExpect(sauceLabsBikeLightExpectedName).to.include(
         actualSauceLabsBikeLightName
      );
      chaiExpect(sauceLabsOnesieExpectedName).to.include(
         actualSauceLabsOnesieName
      );
   });
});
