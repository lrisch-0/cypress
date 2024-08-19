const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('./cypress/plugins/index.js')(on, config); // Incluindo o arquivo de plugins para register os tasks
    },
  },
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
});
