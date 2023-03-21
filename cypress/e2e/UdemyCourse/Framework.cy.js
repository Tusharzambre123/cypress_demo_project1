/// <reference types ="cypress"/>

import HomePage from "../PageObject/HomePage"
import ProductPage from "../PageObject/ProductPage"

describe("Framework",()=>{

    let userData;
    // runs once before each test case
    before(()=>{

        cy.fixture("framework").then((data)=>{

            userData = data;

        })
    })

//     let data;
//      before('Use Test data from fixture file', () => {
//     cy.fixture('framework').then($Data => {
//       data = $Data
//     })
//   })

    it("Test case",()=>{

        // by using environmental variable -
        cy.visit(Cypress.env("url")+"/angularpractice/")

        cy.get("input[name='name']:nth-child(2)").type(userData.name)
        cy.get("input[name='email']").type(userData.email)
        cy.get("input[type='password']").type(userData.password)
        cy.get("input#exampleCheck1").check().should("be.checked").pause()
        cy.get("select").select(userData.gender).debug()
        cy.get("input#inlineRadio1").should("be.visible").and("be.enabled").and("have.value","option1")
        cy.get("input#inlineRadio2").should("be.visible").and("be.enabled")
        cy.get("input#inlineRadio2").check().should("be.checked").and("have.value","option2")
        cy.get("input#inlineRadio3").should("be.disabled").and("have.value","option3")
        cy.get("input[type='date']").should("be.visible").and("be.enabled").type(userData.dateOfBirth)
        cy.get("input[type='submit']").click()
 
        cy.wait(4000)
        cy.get('.alert.alert-success.alert-dismissible').should("contain","Success!")
        cy.get('.close').click()
        //cy.on("window:confirm", () => false)

        cy.get("input[class='ng-untouched ng-pristine ng-valid']").should("have.value",userData.name)
        // cy.get("input[class='ng-untouched ng-pristine ng-valid']").then((e)=>{

        //     const nameText = e.text()
        //     if(nameText==userData.name)
        //     {
        //         cy.log(userData.name)
        //     }
        // })

       cy.get("body > app-root:nth-child(1) > app-navbar:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").click()
        //cy.get("input[name='name']:nth-child(2)").should("have.attr","minlength","2")

       // Add to card the product based on product name
    //    cy.get("h4.card-title").each(($el, index, $list)=>{

    //         const productText = $el.text()
    //         if(productText.includes("Blackberry"))
    //         {
    //             cy.get("button.btn.btn-info").eq(index).click()
    //         }
    //    })

         cy.selectProduct("Blackberry")
         cy.selectProduct("Nokia Edge")

         //To access each product by creating array in .json fixture file, then parameterized function
         // or whole test with data set.
         userData.productName.forEach(element => {
               cy.selectProduct(element)

         });

         cy.title().should("eq","ProtoCommerce")
         cy.url().should("eq","https://rahulshettyacademy.com/angularpractice/shop")
         cy.url().should("contain","shop")
         cy.url().should("include","shop")

         cy.contains('Checkout').click()


    })

    it.skip("Page Object Model[POM] - Home Page",()=>{

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        //Page Object Model[POM] -creating object for class which is exported, here HomePage class
        const homePage = new HomePage()
        homePage.getName().type(userData.name);
        homePage.getEmail().type(userData.email);
        homePage.getPassword().type(userData.password);
        homePage.getCheckbox().check().should("be.checked").pause();
        homePage.getGender().select(userData.gender).debug();
        homePage.getStudentRadioButton().should("be.visible").and("be.enabled").and("have.value","option1");
        homePage.getEmployedRadioButton().should("be.visible").and("be.enabled")
        .check().should("be.checked").and("have.value","option2");
        homePage.getEnterepreneurRadioButton().should("be.disabled").and("have.value","option3");
        homePage.getDateOfBirth().should("be.visible").and("be.enabled").type(userData.dateOfBirth);
        homePage.getSubmit().click();
        Cypress.config("defaultCommandTimeout",10000)
        homePage.getValidatText().should("have.text","\n                    ×\n                    Success! The Form has been submitted successfully!.\n                  ");
    })

    it.skip("Page Object Model[POM] - Product Page",()=>{

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        const productPage = new ProductPage();
        productPage.clickOnShop().click();
        productPage.selectProduct_1()
        productPage.selectProduct_2()
        productPage.checkoutButton_1().click()

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
        

        //Click on Remove button -
        cy.get("tbody tr:nth-child(1) td:nth-child(5) button:nth-child(1)").click()
        
        // Click on Continue shopping button -
        cy.get("button[class='btn btn-default']").click()

        //verify title of the page
        cy.url().should("eq","https://rahulshettyacademy.com/angularpractice/shop")
        cy.url().should("contain","shop")
        
        //productPage.checkoutButton_2().click()
        //cy.wait(4000)
        //productPage.selectLocation().click()
        //productPage.selectCheckbox().click({force : true})
        //productPage.getOrder().click()
        //productPage.validateText().should("have.text","Success!")
        //productPage.closeText().click()
        //productPage.validateCheckoutQuantity().should("have.text"," Checkout ( 1 )\n            (current)\n          ")
        

    })
})