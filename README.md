# WebdriverIO Test Automation Project

## Overview

This project automates end-to-end testing for three different user journeys using WebdriverIO. Each journey has a separate test suite that can be executed individually or sequentially.

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
├── test/
│   ├── lockedOutUser.spec.js       # Locked out user test cases
│   ├── performanceUser.spec.js     # Performance glitch user test cases
│   ├── standardUser.spec.js        # Standard user test cases
├── wdio.conf.js                    # WebdriverIO configuration file
├── package.json                    # Project dependencies and scripts
├── README.md                        # Project documentation
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

   - The `wdio.conf.js` file should contain the necessary test settings.

## Running Tests

### **Running Individual Test Suites**

To run a specific test suite, use the following commands:

```sh
wdio wdio.conf.js --suite lockedOutUser
wdio wdio.conf.js --suite performanceGlitchUser
wdio wdio.conf.js --suite standardUser
```

### **Running Tests Sequentially (By Spec File)**

To execute all test journeys sequentially, use the following script:

```sh
npm run test:sequential
```

### \*\*Creating Suite Scripts in \*\***`package.json`**

Modify the `scripts` section of `package.json` to add test execution commands:

```json
"scripts": {
    "test:lockedOutUser": "wdio wdio.conf.js --suite lockedOutUser",
    "test:performanceGlitchUser": "wdio wdio.conf.js --suite performanceGlitchUser",
    "test:standardUser": "wdio wdio.conf.js --suite standardUser",
    "test:sequential": "npm run test:lockedOutUser && npm run test:performanceGlitchUser && npm run test:standardUser"
}
```

Run all tests sequentially:

```sh
npm run test:sequential
```

## Test Reports

After execution, test results can be viewed in the WebdriverIO test report logs. To generate and view reports, use:

```sh
npm run allure:generate
npm run allure:open
```

## Conclusion

This project provides automated test coverage for different user types in a structured manner. WebdriverIO, Chai assertions, and the Page Object Model ensure scalable and maintainable test cases.

For any issues or improvements, feel free to contribute or raise a request!

