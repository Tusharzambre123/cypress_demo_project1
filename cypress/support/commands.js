// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')
require('cy-verify-downloads').addCustomCommand();


import './commands';

import DatePickerPage from './pageObjects/DatePickerPage';
import DateUtils from './Utility/dateutils';

var datePickerPage = new DatePickerPage();
var dateutils = new DateUtils();

Cypress.Commands.add('selectYear',(yearName)=>{
 
    const currentYear = new Date().getFullYear();
    datePickerPage.getYearName().then(($year)=>{

        if($year.text()==yearName)
        {
            cy.log(yearName + ' year is selected');
            return 
        }
        else
        {
           if(yearName < currentYear)
           {
               datePickerPage.getNavigateBack().click();

           }        
           else if(yearName > currentYear)
           {
               datePickerPage.getNavigateForward().click();
           }
        }

          cy.selectYear(yearName);
    })
})

Cypress.Commands.add('selectMonth',(monthName)=>{

    let currentMonth = new Date().getMonth() + 1;
    let givenMonth = dateutils.getMonthIndexFromName(monthName);

    
    datePickerPage.getMonthName().then(($month) =>{

        if($month.text().includes(monthName))
        {
            cy.log(monthName + ' month is selected')
            return
        }
        else
        {
            if(givenMonth > currentMonth)
            {
                datePickerPage.getNavigateForward().click();
            }
        else if(givenMonth < currentMonth)
        {
               datePickerPage.getNavigateBack().click();
        }
    }

          cy.selectMonth(monthName);

    })
})


Cypress.Commands.add('selectDay', (dayName)=>{

      datePickerPage.getCalenderDays().eq(dayName - 1).click();
      cy.log(dayName + ' day is selected');
})

// Custom command - 
// Add to card the product based on product name
Cypress.Commands.add('selectProduct',(productName)=> { 

    cy.get("h4.card-title").each(($el, index, $list)=>{

        const productText = $el.text()
        if(productText.includes(productName))
        {
            cy.get("button.btn.btn-info").eq(index).click()
        }
    })
})


// Add to card the product by careating array based on product name
Cypress.Commands.add('selectProduct',(element)=> { 

    cy.get("h4.card-title").each(($el, index, $list)=>{

        const productText = $el.text()
        if(productText.includes(element))
        {
            cy.get("button.btn.btn-info").eq(index).click()
        }
    })
})


