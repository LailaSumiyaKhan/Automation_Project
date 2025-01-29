const standardUserLoginActions = require("../pages/standardUserLogin/standardUserLoginActions");
const productActions = require("../pages/product/productActions");
const cartActions = require("../pages/cart/cartActions");
const checkoutActions = require("../pages/checkout/checkoutActions");
const overviewActions = require("../pages/overview/overviewActions");
const completeOrderActions = require("../pages/completeOrder/completeOrderActions");
const completeOrderObjects = require("../pages/completeOrder/completeOrderObjects");
const chaiExpect = require("chai").expect;
let sauceLabsBackpackExpectedName = "";
let sauceLabsBikeLightExpectedName = "";
let sauceLabsOnesieExpectedName = "";
let sauceLabsBackpackExpectedPrice = "";
let sauceLabsBikeLightExpectedPrice = "";
let sauceLabsOnesieExpectedPrice = "";
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
      sauceLabsBackpackExpectedPrice =
         await productActions.getSauceLabsBackpackExpectedPrice();
      sauceLabsBikeLightExpectedPrice =
         await productActions.getSauceLabsbikelightExpectedPrice();
      sauceLabsOnesieExpectedPrice =
         await productActions.getSauceLabsOnesieExpectedPrice();
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
         await cartActions.getSauceLabsBackpackName();
      const actualSauceLabsBikeLightName =
         await cartActions.getsauceLabsBikeLightName();
      const actualSauceLabsOnesieName =
         await cartActions.getsauceLabsOnesieName();
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
   it("verify product's price", async () => {
      const actualSauceLabsBackpackName =
         await cartActions.getSauceLabsBackpackName();
      const actualSauceLabsBikeLightName =
         await cartActions.getsauceLabsBikeLightName();
      const actualSauceLabsOnesieName =
         await cartActions.getsauceLabsOnesieName();
      chaiExpect(sauceLabsBackpackExpectedName).to.include(
         actualSauceLabsBackpackName
      );
      chaiExpect(sauceLabsBikeLightExpectedName).to.include(
         actualSauceLabsBikeLightName
      );
      chaiExpect(sauceLabsOnesieExpectedName).to.include(
         actualSauceLabsOnesieName
      );
      await cartActions.clickOnCheckoutBtn();
      await browser.pause(2000);
   });
   it('should navigate to "Your Information" page', async () => {
      await checkoutActions.getYourInformation();
   });
   it("Verify total price", async () => {
      const actualPrice = await overviewActions.getActualTotalPrice();
      // console.log(actualPrice);
      let tax = await overviewActions.getTax();
      // console.log(tax);
      const expectedPrice =
         sauceLabsBackpackExpectedPrice +
         sauceLabsBikeLightExpectedPrice +
         sauceLabsOnesieExpectedPrice +
         tax;
      // console.log(expectedPrice);
      chaiExpect(actualPrice).to.equal(expectedPrice);
      await overviewActions.clickOnFinishBtn();
   });
   it("Verify Successful Order Message", async () => {
      await expect(completeOrderObjects.successfulOrderMsg).toBeExisting();
      await expect(completeOrderObjects.successfulOrderMsg).toHaveText(
         expect.stringContaining("Thank you for your order!")
      );
      await completeOrderActions.clickHamburgerMenu();
      await completeOrderActions.clickOnResetAppState();
   });
   it("should reset app state again", async () => {
      const currentUrl = await browser.getUrl();
      // console.log(currentUrl);
      await completeOrderActions.clickOnResetAppState();
      const newUrl = await browser.getUrl();
      // console.log(newUrl);
      await productActions.clickOnCloseBtn();
      chaiExpect(currentUrl).to.not.equal(newUrl);
   });
   it("should logout", async () => {
      await completeOrderActions.clickHamburgerMenu();
      await browser.pause(3000);
      await completeOrderActions.clickOnLogoutBtn();
      await browser.pause(3000);
   });
});
