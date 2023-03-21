/// <reference types="cypress" />

describe('Reload Page', function(){

    it('Page Reload Test', function(){

        cy.visit('https://www.amazon.in/');

        cy.contains('Best Sellers').click();
        cy.reload();
        cy.get('#zg_banner_text').should('have.text','Amazon Bestsellers');

        //Reload the page forcefully
      //cy.reload(true);
      cy.reload(true).contains('Bestsellers').should('be.visible');
      cy.reload({timeout:5000});
      cy.reload(true, {timeout:3000});
      cy.contains('Mobiles').click();
       

    })
})