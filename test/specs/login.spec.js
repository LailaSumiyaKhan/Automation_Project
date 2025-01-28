const loginActions = require("../pages/login/loginActions");
const loginObjects = require("../pages/login/loginObjects");
describe("My Login application", () => {
   it("Verify the error message", async () => {
      await loginActions.login();
      await expect(loginObjects.errorMsg).toBeExisting();
      await expect(loginObjects.errorMsg).toHaveText(
         expect.stringContaining(
            "Epic sadface: Sorry, this user has been locked out."
         )
      );
   });
});
