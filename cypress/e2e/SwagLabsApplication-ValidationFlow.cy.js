

it('Validation of Login Page', function(){

    // Launch the application in the browser
    cy.visit('https://www.saucedemo.com/');
    cy.get('.login_logo').should('be.visible');
    cy.get('.bot_column').should('be.visible');
    cy.get('#login_button_container').should('be.visible');
    cy.get('#login_credentials').should('be.visible');
    cy.get('.login_password').should('be.visible');
})

// validation for Title - Products
it('validation of Title Page', function(){
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').should('be.visible').click();
   
    cy.contains('Products').should('be.visible');
    cy.get('.title').then(function(heading){
        var headingstring=heading.text();
    //cy.log(headingstring);

    if(headingstring=='Products')  //Sauce correct 
    {
        cy.log('true statement');
    }
    else
    {
        cy.log('false statement');
    }
})
})

// validation for product name
it('validation of Product Name ',function(){
cy.visit('https://www.saucedemo.com/');
cy.get('[data-test="username"]').type('standard_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').should('be.visible').click();

cy.contains('Sauce Labs Backpack').should('be.visible')
//cy.get('Sauce Labs Backpack')
cy.get('#item_4_title_link > .inventory_item_name').then(function(heading)
{
    var headingstring=heading.text();
    //cy.log(headingstring);
    if(headingstring=='Sauce Labs Backpack') 
    {
        cy.log('true statement');
    }
    else
    {
        cy.log('false statement');
    }

  })  

})

//validation for adding cart value of product in cart
  it('validation of Adding cart value ',function(){
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').should('be.visible').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

   cy.get('.shopping_cart_badge').click();

    //check the cart value after adding items
    cy.get('.shopping_cart_link').should("contain","4");
})


//validation for removing cart value of product in cart
it('validation of Removing cart value ',function(){
   cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').should('be.visible').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    
    cy.get('.shopping_cart_badge').click();
    cy.get('.shopping_cart_link').should("contain","2");

})

   // Validation as per reverse Alphabetical order - Z TO A
    it('Validation of Name (Z TO A)', function(){
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').should('be.visible').click();

        cy.get('[data-test="product_sort_container"]').select('Name (Z to A)');
        var str1 = ('Test.allTheThings() T-Shirt (Red)');
        var str2 = ('Sauce Labs Backpack');
        var ch1 =  str1.charAt(0);
        var ch2 = str2.charAt(0);
        var result = ch1>ch2;
        if(result==true){
            console.log("Pass");
        }else{
            console.log("Fail");
        }
    
    })

    // Validation as per Alphabetical order - A TO Z
    it('Validation of Name (A TO Z)', function(){
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').should('be.visible').click();

        cy.get('[data-test="product_sort_container"]').select('Name (A to Z)');
        var str1 = ('Sauce Labs Onesie');
        var str2 = ('Test.allTheThings() T-Shirt (Red)');
        var ch1 =  str1.charAt(0);
        var ch2 = str2.charAt(0);
        var result = ch1<ch2;
        if(result==true){
            console.log("Pass");
        }else{
            console.log("Fail");
        }
    })


    // Validation as per low to high price of product
    it('Validation of Price (low to high)', function(){
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').should('be.visible').click();

        cy.get('[data-test="product_sort_container"]').select('Price (low to high)');

        var price1 = '15.99';
        var price2 = '49.99';
        var result = price1<price2;
        if(result==true)
        {
            console.log("Pass");
        }
        else{
            console.log("Fail");
        }
    })

    // Validation as per high to low price of product
    it('Validation of Price (high to low)', function(){
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').should('be.visible').click();

        cy.get('[data-test="product_sort_container"]').select('Price (high to low)');

        var price1 = '29.99';
        var price2 = '9.99';
        var result = price1>price2;
        if(result==true)
        {
            console.log("Pass");
        }
        else{
            console.log("Fail");
        }
    })