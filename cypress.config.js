const { defineConfig } = require('cypress')

module.exports = defineConfig({
  videoCompression: 15,
  reporter: 'cypress-mochawesome-reporter',// for html reports
  e2e: {

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);// for html reports
      
     
    },
    pageLoadTimeout:20000,
   requestTimeout: 15000,
defaultCommandTimeout: 15000,
 

  
 
  },
});
   
  




