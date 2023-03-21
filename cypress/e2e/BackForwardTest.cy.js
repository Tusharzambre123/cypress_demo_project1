/// <reference types='cypress'/>

describe('Browser Back and Forward Button Simulate', function(){

    it('Back Forward Test', function(){

        cy.visit('https://www.freshworks.com/',{failOnStatusCode: false});

        cy.contains('FREE TRIALS').click();
        //.go('back')
        //.go('forward');

        //cy.go('back');
        //cy.go(-1);
        //cy.go('back', {timeout : 10000});
        
        //cy.go('forward');
       //cy.go(1);
       //cy.go('forward', {timeout : 15000});


    })

    
})