
/// <reference types="cypress"/>

export class viewPersonalDetails
{

  // enterNickName(nickname)
  // {
  //   cy.get('.oxd-input--active').type(nickname);
  // }

  // enterOtherId(id)
  // {
  //   cy.get('.oxd-input--active').type(id);
  // }

  // enterDriversLicenceNumber(licencenumber)
  // {
  //   cy.get('.oxd-input--active').type(licencenumber);
  // }

  // enterDriversLicenceExpiryDate(expiredate)
  // {
  //   cy.get('.oxd-icon bi-calendar oxd-date-input-icon').select(expiredate);
  // }
  
//   enterSSNnumber(ssnnumber)
// {
//     cy.get('.oxd-input--active').type(ssnnumber);
// }

// enterSSInumber(ssinumber)
// {
//     cy.get('.oxd-input--active').type(ssinumber);
// }

selectNationality(nationality)
{
    cy.get('.oxd-select-text-input').select('Cambodian'); 
}

selectmaritalStatus(status)
{
    cy.get('.oxd-select-text-input').select('Single'); 
}

selectDateOfBirth(dob)
{
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon')
    .select(dob);
}

// selectGender(gender)
// {
//     cy.get('.--label-right oxd-radio-input').check(gender);
// }

// enterMilitaryService(service)
// {
//   cy.get('.oxd-input--active').type(service);
// }

//  smokerCheckBox()
//  {
//   cy.get('.oxd-checkbox-input-icon').check().should('be.checked');
//  }

// clickOnSave()
// {
//   cy.get('.oxd-button oxd-button--medium oxd-button--secondary ooxd-checkbox-input-icon[type="submit"]').click();
// }

// selectBloodType(blood)
// {
//   cy.get('.oxd-select-text-input').select(blood);
// }

// clickOnSave2()
// {
//   cy.get('.orangehrm-left-space[type="submit"]').click();
// }

}

