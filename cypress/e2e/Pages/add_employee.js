export class AddEmployee
{
    clickAddForEmployee()
    {
        cy.get('.oxd-button--secondary[type="button"]').click();
    }

    enterFirstName(firstname)
    {
        cy.get('[name="firstName"]').type(firstname);

    }

    enterMiddleName(middlename)
    {
        cy.get('[name="middleName"]').type(middlename);


    }

    enterLastName(lastname)
    {
        
        cy.get('[name="lastName"]').type(lastname);

    }

    ClickAddForSubmit()
    {
        cy.get('[type="submit"]').click();

    }
}