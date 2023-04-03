const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  WatchForFileChanges: false,
  screenshotOnRunFailure: false,
  reporter: 'mochawesome',
  reporterOptions: {
    code: false,
    owerwrite: false,
    reportFilename: 'Treasury Cube Automation Report',
    autoOpen: true,
    charts: true,
  },
  projectId: 'k1sh9i',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://expense-tracker-e0028.web.app/login',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
