const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { isFileExist, findFiles } = require('cy-verify-downloads');


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;

}

module.exports = defineConfig({

    watchForFileChanges : true,
    defaultCommandTimeout : 6000,
    "chromeWebSecurity" : false,
    failOnStatusCode : false,
    pageLoadTimeout : 60000,
    //reporter : "mochawesome",

  env: {
        url : "https://rahulshettyacademy.com"
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    specPattern : "**/*.js",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
         on('task', {downloadFile})
         on('task', { isFileExist, findFiles });
      
    }
  }
})






