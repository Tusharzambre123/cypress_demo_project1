
Feature: End to end ECommerce validation

    By using Page object model

Scenario: Ecommerce product delivery
Given I open Ecommerce page  
When  I Add items into the cart
And  Validates the total prices
Then  Select the country submit and verify Thank you text message 
