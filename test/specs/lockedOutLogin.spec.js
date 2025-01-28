const lockedOutLoginActions = require("../pages/lockedOutLogin/lockedOutLoginActions");
const lockedOutLoginObjects = require("../pages/lockedOutLogin/lockedOutLoginObjects");
describe("Locked_out_user Login application", () => {
   it("Verify the error message", async () => {
      await lockedOutLoginActions.login();
      await expect(lockedOutLoginObjects.errorMsg).toBeExisting();
      await expect(lockedOutLoginObjects.errorMsg).toHaveText(
         expect.stringContaining(
            "Epic sadface: Sorry, this user has been locked out."
         )
      );
   });
});
