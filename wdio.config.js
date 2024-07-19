/* WebdriverIO configuration file
All WebdriverIO configuration options.
https://webdriver.io/docs/configurationfile/

Example Configuration: 
https://github.com/salesforce/utam-js-recipes/blob/main/wdio.conf.js
*/

// Load the .env file variables into process.env.
require('dotenv').config();
const { UtamWdioService } = require("wdio-utam-service");

/* 
How long should tests wait for async operations to complete?

The prefix 'DEBUG=true' can be set to run test in debug mode
to enable waiting longer.
*/
const { DEBUG } = process.env;
const EXPLICIT_TIMEOUT = 60 * 1000; // Timeout after 1 minute.
const DEBUG_TIMEOUT = EXPLICIT_TIMEOUT * 30; // Timeout after 30 minutes.

// Configure WebdriverIO.
exports.config = {
  runner: 'local',
  specs: ['./tests/**/*.js'],
  exclude: [],
  maxInstances: 1,
  logLevel: 'debug',
  bail: 0,

  // Timeout for all waitFor commands
  waitforTimeout: DEBUG ? DEBUG_TIMEOUT : EXPLICIT_TIMEOUT,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  automationProtocol: "webdriver",

  // Configure the service for WebDriver
  services: [
    [
      UtamWdioService,
      {
        implicitTimeout: 0,
      },
    ],
  ],

  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome'
    }
  ],

  // Configure the test framework to use.
  framework: 'jasmine',
  specFileRetries: 0,

  reporters: ["spec"],
  jasmineOpts: {
    // max execution time for a script, set to 5 min
    defaultTimeoutInterval: 1000 * 60 * 5,
    //
    // The Jasmine framework allows interception of each assertion in order to log the state of the application
    // or website depending on the result. For example, it is pretty handy to take a screenshot every time
    // an assertion fails.
    expectationResultHandler: function(passed, assertion) {
      // do something
    }
  },
};
