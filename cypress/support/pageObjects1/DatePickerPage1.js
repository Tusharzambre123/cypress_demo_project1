export class DatePickerPage1 
{
    getDatePicker()
    {
        return cy.get('div.oxd-date-input input.oxd-input oxd-input--active');
    }

    getCalender()
    {
        return cy.get('div.oxd-date-input input.oxd-input oxd-input--active i.oxd-icon bi-calendar oxd-date-input-icon');
    }

    getNavigateBack()
    {
        return cy.get('');
    }

    getNavigateForward()
    {
        return cy.get('a.ui-datepicker-next');
    }

    getMonthName()
    {
        return cy.get('div.ui-datepicker-title span:nth-child(1)');

    }

    getYearName()
    {
        return cy.get('div.ui-datepicker-title span:nth-child(2)');
    }

    getCalenderDays()
    {
        return cy.get('table.ui-datepicker-calendar a.ui-state-default');
    }

}