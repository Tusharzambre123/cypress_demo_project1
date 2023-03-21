/// <reference types="cypress"/>

it('Launch Swag Labs application', function(){

    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="product_sort_container"]').select('Price (low to high)');
    cy.get('#item_5_title_link > .inventory_item_name').click();
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('.shopping_cart_badge').click();
    cy.get('[data-test="continue-shopping"]').click();
    cy.get('#item_0_title_link > .inventory_item_name').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_badge').click();
    cy.get('[data-test="continue-shopping"]').click();
    cy.get('[data-test="product_sort_container"]').select('Name (Z to A)');
    cy.get('#item_4_title_link > .inventory_item_name').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="back-to-products"]').click();
    cy.get('#item_1_title_link > .inventory_item_name').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Ajay');
    cy.get('[data-test="lastName"]').type('Kumar');
    cy.get('[data-test="postalCode"]').type('41632');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="back-to-products"]').click();
    cy.get('body').click();
    cy.get('#logout_sidebar_link').click({"force":true});
    
})