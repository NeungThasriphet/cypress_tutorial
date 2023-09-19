const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //implement node event listener here
    },
    specPattern: "cypress/integration/examples/*.js",
  },
});
