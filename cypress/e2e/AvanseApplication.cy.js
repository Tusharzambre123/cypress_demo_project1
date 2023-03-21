/// <reference types='cypress' />

describe("App Demo",()=>{

    it("Avanse Application",()=>{

        cy.visit("https://avanseuat.kelltontech.net/")
        cy.title().should("eq","Avanse")
        cy.get("input[type='text']").type("pawar.abhang+2022@kelltontech.com")
        cy.get(".btn.btn-primary.btn-width").click()
        cy.wait(7000)
        cy.get("div.form-group > div > div > div:nth-child(1) > div:nth-child(1)").type("1234")
        cy.get(".btn.btn-primary.btn-width").click()
        cy.url().should("include","my-loans")
        cy.wait(5000)
        cy.get('.logo > img').should("be.visible")
    })
})