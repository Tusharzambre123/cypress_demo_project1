/// <reference types="cypress" />

describe('Hover Test', function(){

    it('How to Hover?', function(){

        cy.visit('https://testpages.herokuapp.com/styled/csspseudo/css-hover.html');

        //cy.get('#hoverpara').click(); // not clicked
        // option 1 - to use mouseover
        //cy.get('#hoverpara').trigger('mouseover');

        // option 2 - to make the text show - It forces to browser to show text(i.e. it is not a hower)
       // cy.get('#hoverparaeffect').invoke('show');

        // option 3 - To use npm package - npm i cypress-real-events -D

        cy.get('#hoverpara').realHover('mouse');
        cy.get('#hoverparaeffect').should('be.visible');

        cy.get('#hoverdivpara').realHover('mouse');
        cy.get('#hoverdivparaeffect').should('be.visible');


    })
})