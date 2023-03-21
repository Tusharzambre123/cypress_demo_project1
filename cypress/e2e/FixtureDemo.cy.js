/// <reference types="cypress" />

/*
How to Read and Write files in Cypress -
1. Read files using fixture() file
2. Read files using readFile() function
3. Write files using writeFile() function

*/

describe('Fixtures Demo', function(){

    // To use data from fixture file in all tests creating a before function
    before(function(){

        cy.fixture('Demoexample1.json').as('test_data')

   })


    it('Read files using the Fixture', function(){

         // Loading the fixture file into test case and read the file
        cy.fixture('Demoexample1.json').then(function(data) {

            cy.log('Inside the Read files using the Fixture test case');
            cy.log(data.email);
            cy.log(data.password);
        })

        // this keyword is used for global level(i.e. used in any block)
        cy.log(this.test_data.email);
        cy.log(this.test_data.password);

    })

    it('Read files using the readFile() function', function(){

        // Loading the fixture file into test case and read the file
        cy.readFile('./cypress/fixtures/Demoexample1.json').then((data)=>{

            cy.log('Inside the Read files using the readFile() function test case');
            cy.log(data.email);
            cy.log(data.password);
        })
    })

    it('Write file', function(){

        cy.log('Inside the Write file test case');

        // Creating file and writing some data on that file
        cy.writeFile('sample.txt', 'Hello I am Tushar ');

        cy.writeFile('sample.txt', 'Learning Cypress Automation', {flag : 'a+'});


    })


})