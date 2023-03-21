///<reference types="cypress"/>

describe("My First Test Suite", ()=>{

 it("My First Test Case", ()=>{

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    //Assertions - 
    cy.title().should("eq","GreenKart - veg and fruits kart")
    cy.title().should("include","GreenKart")
    cy.title().should("contain","GreenKart - veg and fruits")
    cy.url().should("include","rahulshettyacademy.com/")
    cy.url().should("not.include","rahulshetyacademy.com/")

    cy.get("input[type='search']").type("ca")
    //cy.get("button.search-button").click()

    //Count total no. of products(includes invisible products)
    cy.get(".product").should("have.length",5)

    //Count total no. of products which are visible on screen by using visible(.product:visible)
    cy.get(".product:visible").should("have.length",4)
    
    //Parent child chaining to count total no. of products which are visible on screen -
    cy.get(".products").find(".product").should("have.length",4)

    // By using index of particular product click on ADD TO CART button -- This is static
    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click()
    //cy.contains("ADD TO CART").click()

    //Dynamically click on product, based on product name(Not using index) --- This is dynamic
    cy.log("Dynamically")
    cy.get(".products").find(".product").each(($el, index, $list)=>{

        let textVariable = $el.find("h4.product-name").text() // Grab the element present on web page using text() method
        if(textVariable.includes("Carrot"))
        {
          cy.wrap($el).contains("ADD TO CART").click()
          // OR
          cy.wrap($el).find("button").click()
        }

    //Promise is resolved by using .then() method
      cy.get(".brand").then(function(logoElement)
      {
           cy.log(logoElement.text())
      })

      //assert if logo text is correctly displayed as per expected.
      cy.get(".brand").should("have.text","GREENKART")

      




    })

 })


})