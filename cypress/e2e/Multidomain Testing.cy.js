/// <reference types="cypress" />

describe('Two domain URL in different Test Case', function(){

    it('Open the URL', function(){

        cy.visit('https://www.cypress.io/');
    })

    it('Visit the URL and Login to new origin', function(){

        cy.visit('https://www.saucedemo.com/');
        cy.wait(3000);
        cy.get("[id='user-name']").type('standard_user');
        cy.get("[id='password']").type('secret_sauce');
        cy.get("[id='login-button']").click();

        cy.contains('Products').should('be.visible');
    })

    describe('Two domail URL under Same test case', function(){

        it('Open the URL', function(){

            cy.visit('https://www.cypress.io/');
            cy.contains('Home');
            cy.origin('http://automationpractice.com/', function(){

                cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
                cy.wait(2000);
                cy.get("[id='email']").type('multidomain@yopmail.com');
                cy.get("[id='passwd']").type('123456');
                cy.get("[id='SubmitLogin']").click();

            });
            // cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
            // cy.wait(2000);
            // cy.get("[id='email']").type('multidomain@yopmail.com');
            // cy.get("[id='passwd']").type('123456');
            // cy.get("[id='SubmitLogin']").click();


        })

    })

})