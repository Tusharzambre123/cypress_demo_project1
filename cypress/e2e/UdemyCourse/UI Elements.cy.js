///<reference types="cypress"/>
///<reference types="cypress-iframe"/>
import 'cypress-iframe'

describe("Handling UI Elements", () => {

    it("Checkboxs", () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Checkbox - at a time multiple checkboxes can be selected.
        // 1.check(select) the checkboxes and validates whether it is checked or not and its value
        cy.get("#checkBoxOption1").check().should("be.checked").should("have.value", "option1")
        cy.get("#checkBoxOption2").check().should("be.checked").should("have.value", "option2")
        cy.get("#checkBoxOption3").check().should("be.checked").should("have.value", "option3")

        // 2.uncheck(not select) the checkboxes(negative condition) and validates its value
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked").should("have.value", "option1")
        cy.get("#checkBoxOption2").uncheck().should("not.be.checked").should("have.value", "option2")
        cy.get("#checkBoxOption3").uncheck().should("not.be.checked").should("have.value", "option3")

    })


    it("Dropdowns", () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Static dropdown - options are fixed
        cy.get("select").select("option1").should("have.value", "option1")
        cy.get("select").select("option2").should("have.value", "option2")
        cy.get("select").select("option3").should("have.value", "option3")

        //Dynamic dropdown - Options are changed based on user input in given field.
        cy.get("#autocomplete").type("Po")
        cy.get(".ui-menu-item").each(($el, index, $list) => {
            if ($el.text() == "Poland") {
                cy.wrap($el).click()
            }

        })

        // To verify city name displayed or not after click on city name - Poland
        cy.get("#autocomplete").should("have.value", "Poland")

    })

    it("Radio button", () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Radio button - at a time only one radio button is selected.
        cy.get("[value='radio1']").check().should("be.checked")
        cy.get("[value='radio2']").check().should("be.checked")
        cy.get("[value='radio3']").check().should("be.checked")
    })


    it("Visible and invisible elements", () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Handling Visible and invisible elements using Assertions -
        cy.get("#displayed-text").should("be.visible").and("be.enabled")
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible").and("be.enabled")

    })

    it("Alerts", () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Alerts -
        // Cypress by default will handle the alerts so we do not need to write any separate script for that.
        // If we want to do some validations on alert window then we have to write a code  and we have to 
        //trigger some event and that particular event validate some message or some text in alert window.

        // 1.Javascript Alert - It will have some text and an ‘OK’ button.
        cy.get("#alertbtn").click()
        cy.on("window:alert", (str) => {
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        // Alert window automatically closed by cypress

        // 2.Javascript Confirm Alert - It will have some text with ‘OK’ and ‘Cancel’ button.
        cy.get("#confirmbtn").click()
        cy.on("window:confirm", (str) => {
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })
        // Alert window automatically closed by cypress by using 'OK' button - by default 

        // Approach 1 -
        //cy.on("window:confirm",()=> false) // Cypress closes alert window using Cancel button.
        // OR another Approch 2 -
        //    cy.on('window:confirm', (str) => 
        //    {
        //       console.log(str)
        //       return false // simulate "Cancel"
        //     })

        //    cy.get("div fieldset.pull-right legend").should("have.text","Switch To Alert Example")

    })

    it("Child tab and Navigating the browser", () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // Handling Child tab with combination of Cypress & Jquery commands - 
        cy.get("#opentab").invoke("removeAttr","target").click()

        // Navigating browser controls using Cypress -
        cy.go("back") // Go to previous page
        cy.url().should("include", "rahulshettyacademy")
        cy.url().should("contain", "rahulshettyacademy")
        cy.url().should("eq", "https://rahulshettyacademy.com/AutomationPractice/")
        cy.go("forward") // Go to next page 

    })


    // Handling Web tables with Cypress using each command
    it("Web table", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
            const textData = $el.text() // grabbibg the text into variable
            if (textData.includes("Python"))
            // if(textData==("Master Selenium Automation in simple Python Language"))
            {
                cy.get("tr td:nth-child(2)").eq(index).next().then((price) => {
                    {
                        const priceData = price.text()
                        expect(priceData).to.equal("25")
                    }
                })
            }
        })
        // Find out total number of rows contains in Web Table Fixed header table.
        cy.get("div.tableFixHead>table>tbody>tr").should("have.length", "9")

        // Find out total number of columns contains in Web Table Fixed header table.
        cy.get("div.tableFixHead>table>thead>tr>th").should("have.length", "4")

        // Validate text
        cy.get(".totalAmount").should("have.text", " Total Amount Collected: 296 ")

    })

    it("Handling Mouse hover popus using Cypress", () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Verify the pop up is display or not when we mouse hover and click on top button, 
        // for that we used jQuery function - .invoke("show")
        //cy.get(".mouse-hover-content").invoke("show")
        // cy.contains("Top").click()
        // Only click on top button, don't care pop up is opening or not, for that
        // forcefully clicked on that element so cypress talking with DOM and clicked on invisible 
        // elements
        cy.contains("Top").click({ force: true })
        cy.url().should("include", "top")

    })

    it.only("iFrame", () => {

        cy.wait(2000)
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(4000)
        cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2)


        //cy.title().should("eq","Rahul Shetty Academy")


    })
})




