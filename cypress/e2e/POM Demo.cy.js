import{LoginPage} from './Pages/login_page'
const loginpage = new LoginPage();

it('POM Demo', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    loginpage.enterUsername('Admin');
    loginpage.enterPassword('admin123');
    loginpage.clickLogin();

    // assertion -
    // Should be on a new URL which includes '/web/index.php/pim/viewEmployeeList'
    cy.url().should('include','/web/index.php/pim/viewEmployeeList');

    // validate Configuration text on page -
    cy.get('.--parent > .oxd-topbar-body-nav-tab-item')
          .should('be.visible')
          .should('have.text','Configuration ')

    // validate Employee List text on page -
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item')      
          .should('be.visible')
          .should('have.text','Employee List')
    
    // validate Add Employee text on page -  
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item') 
          .should('be.visible')
          .should('have.text','Add Employee')
          
    // validate Reports text on page - 
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item') 
          .should('be.visible')
          .should('have.text','Reports')     


         // cy.get('.oxd-userdropdown-tab').click().select('About')       


    
})