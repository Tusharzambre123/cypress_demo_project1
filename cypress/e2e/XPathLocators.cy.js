/// <reference types='cypress' />

describe('XPathLocators', function(){

    it('Find number of products', function(){

        cy.visit('http://automationpractice.com/index.php');

        cy.xpath("//ul[@id='homefeatured']/li").should('have.length',7);   
    })

    it('Chained XPath', function(){

        cy.visit('http://automationpractice.com/index.php');

        // Multiple XPath - 
        cy.xpath("//ul[@id='homefeatured']").xpath('./li').should('have.length',7);   
    })

    it('Find list items by using within function', () => {

        cy.visit('http://automationpractice.com/index.php');

        cy.xpath("//ul[@id='homefeatured']").within(() => 
        {
          cy.xpath('./li').should('have.length', 7);
        });
      });
})
