/// <reference types='cypress'/>

describe('New Tab', function(){

    it('Handling New Tab', function(){

        cy.visit('https://practice.automationbro.com/');

        cy.get('#contact-us').click(); // will open the contact page in new tab
        cy.get('#contact-us').invoke('removeAttr','target').click(); // remove the target attribute by
        //using invoke() method, this will help us open the contact page in same tab instead of new tab.
        cy.get('h1').should('have.text','Contact');

    })

     



})