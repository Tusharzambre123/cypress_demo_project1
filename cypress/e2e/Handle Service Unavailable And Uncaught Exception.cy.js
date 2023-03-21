/// <reference types='cypress'/>

describe('Handle Service Unavailable And Uncaught Exception in Cypress', function(){

    it('Handle Hub Spot Login Test', function(){

        cy.visit('https://app.hubspot.com/login');

        cy.get('#username').type('tusharzambare0@gmail.com');
        cy.get('#password').type('Tushar@hubspot123');
        cy.get('#loginBtn').click();


    })
})