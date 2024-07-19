// Configuration options for the UTAM compiler.
module.exports = {
  "pageObjectsRootDir": "./", // The directory.
  "pageObjectsFileMask": ["**/__utam__/**/*.utam.json"],
  "extensionsFileMask": ["**/__utam__/**/*.utam.js"],
  "pageObjectsOutputDir": "pageObjects",
  "extensionsOutputDir": "utils",
  "moduleTarget": "commonjs",
  "skipCommonJs": false,
  "alias": {},
  "version": undefined,
  "copyright": undefined,
  "module": undefined,
  "profiles": undefined
};