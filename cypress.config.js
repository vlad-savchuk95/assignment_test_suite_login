const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 20000,
    watchForFileChanges: false,
    video: false,
    viewportWidth: 1200,
    viewportHeight: 800,
    baseUrl: "https://magento.softwaretestingboard.com/",
    env: {
      userEmail: 'fakeEmail123456@gmail.com',
      userPassword: 'Testpassword123$',
      snapshotOnly: true,
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "mochawesome-report",
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
