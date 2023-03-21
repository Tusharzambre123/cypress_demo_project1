/// <reference types="cypress" />

beforeEach(function(){

    cy.visit('https://demo.automationtesting.in/Register.html');

})


describe('UI Elements - Registration Form', function(){

    it('Verify Input box and Radio button', function(){

       // validate title of register page
       cy.title().should('eq','Register');

       // validate logo of the page
       cy.get('.navbar-brand').should('be.visible');

       // enter firstname and validate it.
       cy.get('[ng-model="FirstName"]')
                    .should('be.visible').should('be.enabled').type('Salman');

        // enter lastname and validate it.            
        cy.get('[ng-model="LastName"]')
                    .should('be.visible').should('be.enabled').type('Sharma');

        // enter address and validate it.
       cy.get('[ng-model="Adress"]')             
                    .should('be.visible').should('be.enabled').type('Delhi');
               
       // enter email address and validate it.
       cy.get('[type="email"]')
                    .should('be.visible').should('be.enabled').type('salmansharma5621@gmail.com');

        // enter phone number and validate it.
       cy.get('[type="tel"]')
                    .should('be.visible').should('be.enabled').type('7767123410');   
       
      // Radio button -
      cy.get('[value="Male"]')
                    .should('be.visible').check().should('be.checked'); // visibility and checked status         
      cy.get('[value="FeMale"]')
                   .should('be.visible').should('not.be.checked'); // visibility and checked status 
                                
})             

     // Upload the file - image
     it('File Upload',function(){

        cy.get('#imagesrc').attachFile('Image.jpg');
    })
    
       
    it('Verify Check boxes and Drop downs', function(){

        // check(select) the checkboxes and validates whether it is checked or not and its value
        cy.get('#checkbox1').should('be.visible').check().should('be.checked').should('have.value','Cricket');
        cy.get('#checkbox2').should('be.visible').check().should('be.checked').should('have.value','Movies');
        cy.get('#checkbox3').should('be.visible').check().should('be.checked').should('have.value','Hockey');

        // uncheck(not select) the checkboxes(negative condition)
        cy.get('#checkbox1').should('be.visible').uncheck().should('not.be.checked');
        cy.get('#checkbox2').should('be.visible').uncheck().should('not.be.checked');
        cy.get('#checkbox3').should('be.visible').uncheck().should('not.be.checked');

        // select multiple(All) the checkboxes in one statement(must use common locator between the elements)
        cy.get('[type="checkbox"]').should('be.visible').check(['Cricket','Hockey']); //values of elements are in array

        // select first checkbox among no. of checkbox
        cy.get('[type="checkbox"]').first().check().should("be.checked")

        // select last checkbox among no. of checkbox
        cy.get('[type="checkbox"]').last().check().should("be.checked")

        //Skills dropdown - Dropdown with select(static dropdown)
        cy.get('#Skills').select('Android').should('have.value','Android');

        cy.get('#countries').select('Select Country').should('have.value','');


        //Languages multiselect - Dropdown without select
        cy.get('#msdd').click();
        // capture all the elements(i.e.not select) by using common locator
        cy.get('.ui-corner-all').contains('Czech').click();
        cy.get('.ui-corner-all').contains('German').click();
        cy.get('.ui-corner-all').contains('Latvian').click();
        cy.get('.ui-corner-all').contains('Swedish').click();

        
        //select countries searchable dropdown
        cy.get('[role="combobox"]').click({force:true});
        cy.get('.select2-search__field').type('Den').type('{enter}');
       // cy.get('.select2-search__field').type('{enter}');


        // selecting date of birth -
        // 1. select year and validate year
        cy.get('#yearbox').select('1996').should('have.value','1996');

        // 1. select month and validate month
        cy.get('[ng-model="monthbox"]').select('August').should('have.value','August');

        // 2. select day and validate day
        cy.get('#daybox').select('5').should('have.value','5');

        // enter password
        cy.get('#firstpassword').type('Salman123');

        // enter confirm password
        cy.get('#secondpassword').type('Salman123');

        // click on submit button
        cy.get('.btn-primary[type="submit"]').click();
    
    })    
    
    
       
    
})