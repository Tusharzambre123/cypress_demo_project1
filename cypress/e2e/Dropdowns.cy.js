/// <reference types="cypress" />

describe('Handle Dropdown', function(){

    it('Dropdown with select - Static dropdown', function(){

        cy.visit('https://www.zoho.com/commerce/free-demo.html');

        cy.get('#zcf_address_country').select('India').should('have.value','India');

    })

    it('Dropdown without select - Dynamic dropdown', function(){

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

        cy.get('#select2-billing_country-container').click();

        cy.get('.select2-search__field').type('Japan').type('{enter}');

        cy.get('#select2-billing_country-container').should('have.text','Japan');
    })


    // static Auto suggest Dropdown -
    it('Auto suggest Dropdown', function(){

        cy.visit('https://www.wikipedia.org/');

        cy.get("[name='search']").type('Delhi');

        // To get or capture all options and select particular one.
        // for that we use Locator which match all the options
        cy.get('.suggestion-title').contains('Delhi University').click();

        // verify the title of the page 
        cy.title().should('eq','Delhi University - Wikipedia');

        // verify the URL 
        cy.url().should('include','/wiki/Delhi_University');
    })
})


      it("Dynamic dropdown", ()=>{

        cy.visit("https://www.google.com/")

        cy.get(".gLFyf").type("cypress automation")

        // To capture all the options and count total no.of options
        cy.get("div.wM6W7d>span").should("have.length",11)

        //If you want to iterate all the options one after another, write JQuery function i.e. each 
        cy.get("div.wM6W7d>span").each(($el, index, $list)=>{

            if($el.text()=="cypress automation tutorial")
            {
                cy.wrap($el).click()
            }
        })

        cy.get("li:nth-child(2) >div > .pcTkSc > div.wM6W7d > span").should("have.text","cypress automation tutorial")

       

      })