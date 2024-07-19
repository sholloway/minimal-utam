/**
 * Logins in to a Salesforce org specified in the .env file.
 *
 * See https://webdriver.io/docs/debugging/ for instructions
 * on debugging with VSCode.
 */

const login = require("./utilities/login");
const TestEnvironment = require("./utilities/test_environment");

const AppLauncherMenu = require("salesforce-pageobjects/global/pageObjects/appLauncherMenu");
const DesktopLayoutContainer = require("salesforce-pageobjects/navex/pageObjects/desktopLayoutContainer");

async function navigateToApp(appNav, targetAppName) {
  // 1. Navigate to the app launcher.
  const appLauncher = await (await appNav.getAppLauncherHeader()).getButton();
  await appLauncher.click();

  // 2. Search for the target app in the App Launcher
  const menu = await utam.load(AppLauncherMenu);
  const search = await (await menu.getSearchBar()).getLwcInput();
  await search.setText(targetAppName);

  // 3. Find the find the target App in the search results.
  const menuItems = await menu.getItems();
  let targetLink, itemRoot, text;
  for (const item of menuItems) {
    itemRoot = await item.getRoot();
    text = await itemRoot.getText();
    if (text == targetAppName) {
      targetLink = itemRoot;
      break;
    }
  }

  // 6. Navigate to the Sales App
  await targetLink.click();
}

describe("Navigate Salesforce", () => {
  it("Open the Sales App", async function () {
    const targetAppName = "Sales";

    // 1. Set up the test.
    let envPrefix = process.env["ENV_UNDER_TEST"];
    const testEnv = new TestEnvironment(envPrefix);
    const baseUrl = testEnv.redirectUrl;
    expect(testEnv.username).toEqual("automated.test@salesforce.com");

    // 2. Login
    await login(testEnv, "home");

    // 3. Navigate to the Sales App
    const container = await utam.load(DesktopLayoutContainer);
    const appNav = await container.getAppNav();
    await navigateToApp(appNav, "Sales");

    // 4. Verify that the navigation was successful.
    let appName = await (await appNav.getAppName()).getText();
    expect(appName).toEqual("Sales");
  });
});
