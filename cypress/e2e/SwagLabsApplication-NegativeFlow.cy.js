/// <reference types="cypress"/>

it('Launch the application with invalid URL', function(){
    
    // launch the application in browser
    cy.visit('https://www.saucedemocom');
    cy.get('.login_logo').should('be.visible');
    cy.log('Enter valid URL');
})


// login with invalid username and password
it('Login with invalid username and password',function()
{
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('anil@123');
    cy.get('[data-test="password"]').type('anil');
    cy.get('[data-test="login-button"]').should('be.visible').click();
    cy.log('Enter valid Username and Password');
})

// login using valid user name and invalid password
it('Login using valid user name and invalid password',function()
{
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('anil');
    cy.get('[data-test="login-button"]').should('be.visible').click();
    cy.log('Enter valid password ');

})

// login using invalid username  and valid password
it('Login using invalid username  and valid password',function()
{
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('anil');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').should('be.visible').click();
    cy.log('Enter valid username ');

})

// Login with blank username and password
  it('Login with blank username and valid password',function()
  {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(' ');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').should('be.visible').click();
    cy.log('Enter valid username');
    
  })


  // Login with valid username and blank password
  it('Login with valid username and blank password',function()
  {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type(' ');
    cy.get('[data-test="login-button"]').should('be.visible').click();
    cy.log('Enter valid password');
    
  })


  it('Login with blank username and blank password', function()
  {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(' ');
    cy.get('[data-test="password"]').type(' ');
    cy.get('[data-test="login-button"]').should('be.visible').click();
    cy.log('Enter valid username and valid password');

  })


