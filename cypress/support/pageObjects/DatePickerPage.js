class DatePickerPage 
{
    getDatePicker()
    {
        return cy.get('input#datepicker1');
    }

    getCalender()
    {
        return cy.get('div#ui-datepicker-div');
    }

    getNavigateBack()
    {
        return cy.get('a.ui-datepicker-prev');
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
        cy.wait(10000)
        return cy.get('div.ui-datepicker-title span:nth-child(2)')
    }

    getCalenderDays()
    {
        return cy.get('table.ui-datepicker-calendar a.ui-state-default');
    }

}

export default DatePickerPage;