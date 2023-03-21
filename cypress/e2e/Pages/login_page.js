export class LoginPage 
{
    enterUsername(username)
    {
        cy.get('[name="username"]').type(username);

    }

    enterPassword(password)
    {
        cy.get('[name="password"]').type(password);

    }

    clickLogin()
    {
        cy.get('[type="submit"]').click();

    }
}