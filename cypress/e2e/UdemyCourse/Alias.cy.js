///<reference types="cypress"/>

describe("Concept of Alias", ()=>{

    it("Filling invalid username and password",()=>{

        cy.visit("https://codenboxautomationlab.com/wp-login.php")
        cy.wait(2000)

        cy.get("#user_login").as("username")
        cy.get("@username").clear()
        cy.get("@username").type("Tushar")

        cy.get("#user_pass").as("password")
        cy.get("@password").clear()
        cy.get("@password").type("Tushar3278")
        cy.get("#wp-submit").click()

        // Verify title of current page
        cy.title().should("eq","Log In ‹ CodenBox AutomationLab — WordPress")

        // Verify some text of current page
        cy.title().should("include","CodenBox AutomationLab — WordPress")

        //click on lost your password link
        cy.get("[href='https://codenboxautomationlab.com/wp-login.php?action=lostpassword']").click()

        // Verify title of page after clicking on Lost password link
        cy.title().should("eq","Lost Password ‹ CodenBox AutomationLab — WordPress")

        // Verify text of URL after clicking on Lost password link
        cy.url().should("include","?action=lostpassword")

        



    })

    
    // it("Filling invalid password",()=>{

    //     cy.visit("https://codenboxautomationlab.com/wp-login.php")
    //     cy.wait(2000)

    //     cy.get("#user_pass").as("password")
    //     cy.get("@password").clear()
    //     cy.get("@password").type("Tushar3278")
    //     cy.get("#wp-submit").click()

    // })

})