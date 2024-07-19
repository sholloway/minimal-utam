# Minimal UTAM Project

---

This repo is an example of how to leverage the Salesforce UI Test Automation Model (UTAM).

## Disclaimers

This repo is not a supported project by Salesforce. Use at your own risk.

It has been tested on a machine with:

- macOS Sonoma
- Node.js v20.15.1
- npm v10.7.0
- Salesforce Summer 24 Release (API v61.0)

## Resources

- [Official Docs](https://utam.dev/)
- [UTAM Tutorials](https://utam.dev/tutorial/introduction)

## Overview

UTAM is a framework provided by Salesforce, Inc for automating Salesforce orgs
using the [Page Object](https://martinfowler.com/bliki/PageObject.html) pattern.
Salesforce provides the example repo [utam-js-recipes](https://github.com/salesforce/utam-js-recipes)
for getting familar with using the UTAM framework with JavaScript.

_That_ repository is the official place for Salesforce UTAM examples and demonstrates how to do a
variaty of tasks with UTAM. In contrast, this repo provides a single minimal
example of automating a Salesforce Org using the out of the box Salesforce components.
It is minimialist by design.

The project has two tests.

- [hello_world.spec.js](./tests/hello_world.spec.js) This demonstrates a minimal Jasmine test. It doesn't automate anything but it does run when the tests are run.
- [navigation_example.spec.js](./tests/navigation_example.spec.js) This logins into a Salesforce org, uses the AppLauncher to navigate to the Sales app, and verifies the navigation succeeded.

## The Technology Stack

The repo demonstrates how to combine the following technology to automate a Salesforce org using the page object pattern.

| Technology                                                         | Description                                                                  |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [Node.js](https://nodejs.org/)                                     | JavaScript App Server. Provides the runtime context for the tests to run it. |
| [npm](https://www.npmjs.com/)                                      | The Node Package Manager. Used to install the dependencies.                  |
| [WebDriverIO](https://webdriver.io/)                               | Automation toolkit.                                                          |
| [Jasmine](https://jasmine.github.io/)                              | Testing framework.                                                           |
| [utam](https://utam.dev/)                                          | The UI Test Automation Model                                                 |
| [salesforce-pageobjects](https://utam.dev/salesforce/introduction) | Salesforce provided page objects for OOTB components.                        |

## Instructions

1. Install Node.js and NPM by downloading it from [nodejs.com](https://nodejs.org/).
2. Clone this repo.
3. Use npm to install the dependencies defined in the [package.json](package.json) file.

```shell
npm install
```

4. The project uses a .env file for setting authentication credentials.
   An [example .env](env_example) file is provided. Copy that to a .env file and update
   the values to use your own details.
5. The project provides multiple ways to run the tests.

- Via a npm script. `npm run test`
- Via a Makefile. `make test`
- Via VSCode Launch Targets (_Run All Tests_ and _Debug Selected Test_).
