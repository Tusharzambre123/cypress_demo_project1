///<reference types="cypress"/>

describe("Alerts", () => {

    it("JS Alert", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        //Validating the text present on Alert window by Triggering an event
        cy.on("window:alert", (str) => {
            expect(str).to.equal("I am a JS Alert")
        })
        //NOTE - Alert window automatically closed by cypress

        //Validating the text present on UI 
        cy.get("#result").should("have.text", "You successfully clicked an alert")
    })

    it("JS Confirm Alert - 'OK' button", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        //Validating the text present on Alert window by Triggering an event
        cy.on("window:confirm", (str) => {
            expect(str).to.equal("I am a JS Confirm")
        })
        //NOTE - Alert window automatically closed by cypress by using OK button by default

        //Validating the text present on UI 
        cy.get("#result").should("have.text", "You clicked: Ok")
    })

    it("JS Confirm Alert - 'Cancel' button", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        //Validating the text present on Alert window by Triggering an event
        cy.on("window:confirm", (str) => {
            expect(str).to.equal("I am a JS Confirm")
        })


        // Cypress closes alert window by using Cancel button
        cy.on("window:confirm", () => false)

        //Validating the text present on UI 
        cy.get("#result").should("have.text", "You clicked: Cancel")
    })

    // it("JS Prompt Alert", () => {

    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    //     //Before opening the alert window we have trigger event in which we can pass text value
    //     // into input box, after that close window either by Cancel or OK button.
    //     cy.window().then((win) => {

    //         cy.stub(win, "prompt").returns("Welcome")
    //     })

    //     cy.get("button[onclick='jsPrompt()']").click()

    //     //cypress will automatically close prompted alert window by using OK button by default

    //     //Validating the text present on UI
    //     cy.get("#result").should("have.text", "You entered: Welcome")

    //     // Cypress closes alert window by using Cancel button
    //     // 

    // })

    it("JS Confirmation Prompt: Cancel", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
        cy.stub(win, "prompt").returns("Welcome")

        })

        //cy.click(2, "Click for JS Prompt")
       // cy.get("button[onclick='jsPrompt()']").click()
        cy.on("window:prompt", () => false)
        cy.contains('Click for JS Prompt').click()

        cy.get("#result").should("have.text", "You entered: null")
        });

    //Authenticated Alert - 
    it("Authenticated Alert", () => {

        cy.log("Approach first is - ")
        //Approach 1 -
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
             auth: { username: "admin", 
                    password: "admin" }
             })

        //Validate text on the page
        cy.get("div div.example h3").should("have.text", "Basic Auth")
        cy.get("div[class='example'] p").should("have.text", "\n    Congratulations! You must have the proper credentials.\n  ")

        //Validate text on the page
        cy.get("div[class='example'] p").should("have.contain", "Congratulations")

        cy.log("Approach second is - ")

        //Approach 2 -
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        //Validate text on the page
        cy.get("div[class='example'] p").should("have.contain", "Congratulations")
    })


})