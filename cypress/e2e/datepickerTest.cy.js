/// <reference types="cypress" />

import DatePickerPage from '../support/pageObjects/DatePickerPage';

var datepickerpage = new DatePickerPage();

describe('datepicker demo', function(){

    it('Navigate to URL and open Datepicker', function(){

        cy.visit('https://demo.automationtesting.in/Datepicker.html');

        datepickerpage.getDatePicker().click();
        datepickerpage.getCalender().should('be.visible');
    })

    it('Select Date', function(){

        cy.selectYear(2017);
        cy.selectMonth('May');
        cy.selectDay(2)
    })
})