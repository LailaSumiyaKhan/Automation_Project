const performanceGlitchUserLoginActions = require("../pages/performanceGlitchUserLogin/performanceGlitchUserLoginActions");
const performanceUserProductActions = require("../pages/performaneUserProduct/performanceUserProductActions");
const productActions = require("../pages/product/productActions");
const performanceUserProductDetailActions = require("../pages/performanceUserProductDetail/performanceUserProductDetailActions");
const performanceUserCartActions = require("../pages/performanceUserCart/performanceUserCartActions");
const checkoutActions = require("../pages/checkout/checkoutActions");
const overviewActions = require("../pages/overview/overviewActions");
const completeOrderObjects = require("../pages/completeOrder/completeOrderObjects");
const completeOrderActions = require("../pages/completeOrder/completeOrderActions");
let productExpectedName = "";
let productPrice = "";
const chaiExpect = require("chai").expect;
describe("Performance glitch user product purchase journey", () => {
   it("should login with valid credentials ", async () => {
      await performanceGlitchUserLoginActions.login();
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
   it("sort products", async () => {
      await performanceUserProductActions.clickOnProductSortContainer();
      await browser.pause(2000);
      await performanceUserProductActions.clickOnProductSortContainerOption();
      await browser.pause(2000);
   });
   it("select first product", async () => {
      await performanceUserProductActions.clickOnProductLink();
      await browser.pause(2000);
   });
   it("add the product from product detail page", async () => {
      productExpectedName =
         await performanceUserProductDetailActions.getProductExpectedName();
      productPrice =
         await performanceUserProductDetailActions.getProductPrice();
      await performanceUserProductDetailActions.clickOnAddToCartBtn();
      await browser.pause(2000);
      await performanceUserProductDetailActions.clickOnShoppingCartLink();
      await browser.pause(2000);
   });
   it("verify product name", async () => {
      const actualProductName =
         await performanceUserCartActions.verifyProductNameInCart();
      chaiExpect(actualProductName).to.equal(productExpectedName);
      await browser.pause(2000);
      await performanceUserCartActions.chickOnCheckoutBtn();
      await browser.pause(2000);
   });
   it("should fill user information ,navigate to overview page", async () => {
      await checkoutActions.getYourInformation();
   });
   it("verify product total price and click on finish", async () => {
      const actualTotalPrice = await overviewActions.getActualTotalPrice();
      const actualTax = await overviewActions.getTax();
      const expectedTotalPrice = productPrice + actualTax;
      chaiExpect(actualTotalPrice).to.equal(expectedTotalPrice);
      await overviewActions.clickOnFinishBtn();
   });
   it("verify successful order Message", async () => {
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
