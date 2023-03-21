import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from '../../../PageObject/HomePage'
import HomePage from "../../../PageObject/HomePage"

// I open Ecommerce page
Given("I open Ecommerce page", function(){

    cy.visit("https://rahulshettyacademy.com/angularpractice/")
})

//I Add items into the cart
When("I Add items into the cart", function(){

    const homePage = new HomePage()
    const productPage = new ProductPage();
    productPage.clickOnShop().click();
    productPage.selectProduct_1()
    productPage.selectProduct_2()
    productPage.checkoutButton_1().click()
})

// Validates the total prices
And("Validates the total prices", function(){

    // Add functionality of product prices and compare with total value
    var sum = 0;
    cy.get("tr td:nth-child(4)>strong").each(($el, $index, $list)=>{

        const priceText = $el.text(); //₹. 65000, ₹. 50000
        cy.log(priceText) //₹. 65000,₹. 50000
        var result = priceText.split(" ") //[₹., 50000], [₹., 650000]
        cy.log(result);
        result= result[1].trim(); //e.g. - result[0]=₹., result[1]=  65000(include whitespace)
        cy.log(result)

        sum = Number(sum) + Number(result);      
    }).then(()=>{

        cy.log(sum)
    })

    cy.get("h3 strong").each(($ele, $index, $list)=>{

        const priceText = $ele.text(); //₹. 150000
        cy.log(priceText)  //₹. 150000
        var result = priceText.split(" ") //[₹., 150000]
        cy.log(result);
        var totalSum= result[1].trim(); //e.g. - result[0]=₹., result[1]=  65000(include whitespace)
        cy.log(result)
        expect(Number(totalSum)).to.equal(sum) //convert string(totalSum) into integer by using Number keyword
    })
})

// Select the country submit and verify Thank you text message
Then("Select the country submit and verify Thank you text message",function(){

        productPage.checkoutButton_2().click()
        cy.wait(4000)
        productPage.selectLocation().click()
        productPage.selectCheckbox().click({force : true})
        productPage.getOrder().click()
        productPage.validateText().should("have.text","Success!")
        productPage.closeText().click()
        productPage.validateCheckoutQuantity().should("have.text"," Checkout ( 1 )\n            (current)\n          ")

})
