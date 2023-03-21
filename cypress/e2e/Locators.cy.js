/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


describe('Locating Elements', function(){
    
    it('Verify types of locators', function(){

        // open the Url
        cy.visit('https://demo.nopcommerce.com/');

        // search box 
        cy.get('.ui-autocomplete-input').type('Apple MacBook Pro 13-inch');

        // click on search button
        cy.get('.search-box-button[type="submit"]').click();

        cy.get('.product-box-add-to-cart-button[type="button"]').click();

        // Quantity
        cy.get('#product_enteredQuantity_4').clear().type('3');

        // Add to cart button after providing quantity
        cy.get('#add-to-cart-button-4').click();

        cy.wait(5000);

        // shopping cart link
        cy.get('#topcartlink > a > span.cart-label').click();

        cy.wait(3000);

        // validate price of product
        cy.get('.product-unit-price').contains('$1,800.00');

        
    })
})

describe.only('CSS Locators', ()=>{

    it('CSS Locators',()=>{

        cy.visit("https://www.amazon.in/")
        cy.get("#twotabsearchtextbox").type("T-Shirts")
        cy.get("#nav-search-submit-button").click()

        //cy.get(".a-size-medium-plus").contains("RESULTS")
        cy.get("div:nth-child(2) > div > span > div > div > span").should("have.text","RESULTS")
        cy.wait(2000)
        cy.get(".nav-a[href='/gp/bestsellers/?ref_=nav_cs_bestsellers']").click()
        cy.wait(2000)
        cy.get(".a-link-normal[aria-label='Bestsellers in Bags, Wallets and Luggage - See More']").should("have.text","See More").click()
        
        //cy.get("[tabindex^='0']").click({multiple : true})
        // //cy.get('[disabled]').click({force: true})

        cy.get("#zg_banner_text").should("have.text","Amazon Bestsellers")
        cy.get("#zg_banner_subtext").should("have.text","Our most popular products based on sales.  Updated frequently.")
        
    })

})

describe("XPath locator", ()=>{

    it("XPath locator", ()=>{

        cy.visit("https://www.saucedemo.com/")
        cy.xpath("//input[@id='user-name']").type("standard_user")
       // cy.get("#user-name").type("standard_user")// //tagname[@attribute='value']
        cy.xpath("//input[@type='password']").type("secret_sauce") // //tagname[@attribute='value']
        cy.xpath("//input[@type='submit']").click()


        // we can use css selector and xpath for different elements for the same web page.

        
    })
    
})