
import{LoginPage} from './Pages/login_page'
const loginpage = new LoginPage();

import{AddEmployee} from './Pages/add_employee'
const addemployee = new AddEmployee();

import{viewPersonalDetails} from './Pages/personal_details'
const personaldetails = new viewPersonalDetails();

it.skip('POM DEMO- Login',function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // assertions -
    // to validate image on page -
    cy.get('.orangehrm-login-branding > img').should('be.visible');

    // to validate logo on page -
    cy.get('.orangehrm-login-logo').should('be.visible');

    // to validate Login text on page -
    cy.contains('Login').should('be.visible');

    // to validate login credentials(username and password) on page -
    cy.get('.oxd-sheet').should('be.visible');

    // to validate Login tab on page -
    cy.get('.oxd-button').should('be.enabled');

    // to validate Forgot your password? text on page -
    cy.get('.orangehrm-login-forgot > .oxd-text').should('be.visible');

    // To validate copyright text on the page -
    cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should('be.visible');
    cy.get('.orangehrm-copyright-wrapper > :nth-child(2)').should('be.visible');

    // To validate login branding on the page - 
    cy.get('.orangehrm-login-branding').should('be.visible');


    // loginpage.enterUsername('Admin');
    // loginpage.enterPassword('admin123');
    // loginpage.ClickLogin();
})


it.skip('POM DEMO- Add Employee',function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    loginpage.enterUsername('Admin');
    loginpage.enterPassword('admin123');
    loginpage.ClickLogin();

    addemployee.clickAddForEmployee();
    addemployee.enterFirstName('Kunal');
    addemployee.enterMiddleName('Raj');
    addemployee.enterLastName('Sharma');
    addemployee.ClickAddForSubmit();

    // assertion -
    // cy.url().should('include','/pim/viewPersonalDetails/empNumber/57');

    // cy.get('.orangehrm-header-container > .oxd-button').click();
    // cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Kunal');
    // cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Raj');
    // cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Sharma');
    // cy.get('.oxd-button--secondary').click();

    // assertion -
    //cy.url().should('include','/pim/viewPersonalDetails/empNumber/99');
})

it.only('POM DEMO- Personal Details', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    loginpage.enterUsername('Admin');
    loginpage.enterPassword('admin123');
    loginpage.ClickLogin();

    addemployee.clickAddForEmployee();
    addemployee.enterFirstName('Kunal');
    addemployee.enterMiddleName('Raj');
    addemployee.enterLastName('Sharma');
    addemployee.ClickAddForSubmit();

    // personaldetails.enterNickName('Kunal')
    // personaldetails.enterOtherId(8943);
    // personaldetails.enterDriversLicenceNumber('ABZP1234');
//    personaldetails.enterDriversLicenceExpiryDate('2022-08-30');
    //personaldetails.enterSSNnumber('8743');
   // personaldetails.enterSSInumber('1234');
    // personaldetails.selectNationality('Afghan');
    // personaldetails.selectmaritalStatus('Single');
//    personaldetails.selectDateOfBirth('1990-12-23')
  // personaldetails.selectGender('Male');
   //personaldetails.enterMilitaryService('Yes')
   //personaldetails.smokerCheckBox();
  // personaldetails.clickOnSave();
   //personaldetails.selectBloodType('A');
   //personaldetails.clickOnSave2();

})
