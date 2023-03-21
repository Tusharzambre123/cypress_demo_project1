// To provide automation code completion we use -
/// <reference types="cypress" />


// To write a test we need test runner - mocha
// mocha comes built-in with cypress

// Launch the application in the browser -
it('Google Search', function(){

    cy.visit('https://www.google.com');

    // Access the elements -
     cy.get('.gLFyf',{timeout:7000}).type('Automation Testing{Enter}');

   // Access element with text -
    //cy.contains('Videos').click();

    // wait for some period when we required -
   // cy.wait(5000);

    // click on Next link -
    //cy.get('[style="display:block;margin-left:53px"]').click();
    

    // go to the previous page -
    //cy.go('back');

    // Add custom timeout - command level
   // cy.get('.gLFyf',{timeout : 7000}).type('Automation Testing {Enter}'); // invalid locator - .gLFf123 
                                                                             // instead of .gLFyf

    // Add custom timeout - global level - cypress.config.js - "defaultCommandTimeout" : 7000ms  - for version above 10
                                      // - cypress.json - "defaultCommandTimeout" : 6000ms - for version below 10

    

  

})