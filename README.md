# WebdriverIO Automation Project

## Overview

This project is an automated test suite using WebdriverIO for testing different user journeys on a web application. It includes test scenarios for Locked Out User, Performance Glitch User, and Standard User. The tests validate login functionality, product selection, product name and total price verification, cart operations, checkout, and order completion.

### Project Preview

1. **Sequential Execution** - [Watch the video](https://youtu.be/l50rHUZuP0U)
2. **Separate Execution** - [Watch the video](https://youtu.be/eKHUfO5Qjik)
3. **Sequential Execution**- [![Video Title](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/0.jpg)](https://youtu.be/l50rHUZuP0U)

## Project Structure

```
project-root/
├── pages/                          # Page Object Model (POM) files
│   ├── lockedOutLogin/
│   ├── performanceGlitchUserLogin/
│   ├── standardUserLogin/
│   ├── product/
│   ├── cart/
│   ├── checkout/
│   ├── overview/
│   ├── completeOrder/
│   ├── performanceUserProduct/
│   ├── performanceUserProductDetail/
│   ├── performanceUserCart/
├── test/
│   ├── lockedOutLogin.spec.js          # Locked out user test cases
│   ├── performanceGlitchUser.spec.js   # Performance glitch user test
│   ├── standardUser.spec.js            # Standard user test cases
├── wdio.conf.js                        # WebdriverIO configuration file
├── package.json                        # Project dependencies and scripts
├── README.md                           # Project documentation
```

## Installation & Setup

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Ensure WebdriverIO is properly configured:**

   -  The `wdio.conf.js` file should contain the necessary test settings.

## Running Tests Separately and Sequentially

Separate Execution: Suites are defined in wdio.conf.js, and scripts for each suite are declared in package.json. To run tests separately, comment out the spec section in wdio.conf.js and execute the test script from package.json.

Sequential Execution: Uncomment the spec section in wdio.conf.js to enable all test files, then run WebdriverIO normally to execute tests in sequence.

### **Running Tests Sequentially (By Spec File)**

To execute all test journeys sequentially, use the following script:

```sh
npm run wdio
```

### \*\*Creating Suite Scripts in \*\***`package.json`**

Modify the `scripts` section of `package.json` to add test execution commands:

```json
"scripts": {
     "testOne": "wdio run ./wdio.conf.js --suite lockedOutUser",
     "testTwo": "wdio run ./wdio.conf.js --suite standardUser",
     "testThree": "wdio run ./wdio.conf.js --suite performanceGlitchUser",
}
```

### **Running Seperate Test Suites**

To run a specific test suite, use the following commands:

```sh
npm run testOne
npm run testTwo
npm run testThree
```

## Test Reports

### Allure Reporting with Screenshots:

This project integrates Allure Report for test execution analysis.
Screenshots are automatically captured for failed test cases.
To generate and view the Allure report after execution, run:

```sh
npm run getReport
```

## Conclusion

This project provides automated test coverage for different user types in a structured manner. WebdriverIO, Chai assertions, and the Page Object Model ensure scalable and maintainable test cases.
