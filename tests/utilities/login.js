/**
 * Note
 * This module is borrowed from https://github.com/salesforce/utam-js-recipes/
 * to demonstrate a simple demo.
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 */

const Login = require("salesforce-pageobjects/helpers/pageObjects/login");

/**
 * Helper function for navigating login in a standard environment.
 * @param {import("./test-environment").TestEnvironment} testEnvironment
 * @param {string} landingPagePartialUrl
 */
module.exports = async function login(testEnvironment, landingPagePartialUrl) {
  const { baseUrl, username, password } = testEnvironment;

  console.log(`Navigate to login URL: ${baseUrl}`);
  await browser.url(baseUrl);
  const loginPage = await utam.load(Login);
  await loginPage.login(username, password);
  const document = utam.getCurrentDocument();
  await document.waitFor(async () => {
    const docUrl = await document.getUrl();
    return docUrl.includes(landingPagePartialUrl);
  });
};
