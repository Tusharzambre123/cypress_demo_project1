
// hooks - hooks borrowed from Mocha framework
// Used to organizing our tests in cypress
//These are helpful to set conditions that you want to run before a set of tests or before each test. 
// before, beforeEach, afterEach and after blocks are used to load configuration files.

describe.only('My Hooks Test Suite 1', function(){


    before(() => {
        // runs once before all tests in the block
        // we write all setting related stubs 
        // If we want to load third party files, we write that piece of code in before method
           cy.log('This is set up block');
      })
    
      beforeEach(() => {
        // runs before each test in the block(multiple times).
           cy.log('This is Login block');

      })
    
      afterEach(() => {
        // runs after each test in the block(multiple times).
          cy.log('This is Logout block');

      })
    
      after(() => {
        // runs once after all tests in the block
        // statement comes under exist criteria e.g. report generation.
          cy.log('This is Tear down block');

      })

      it('searching',function(){

          cy.log('This is searching Test');

      })

      it('Advanced searching',function(){

          cy.log('This is Advanced searching Test');

    })

      it('Listing product',function(){

          cy.log('This is Listing product Test');

    })
})


describe.only('My Hooks Test Suite 2', function(){


    before(() => {
        // runs once before all tests in the block
        // we write all setting related stubs 
        // If we want to load third party files, we write that piece of code in before method
           cy.log('This is set up block');
      })
    
      beforeEach(() => {
        // runs before each test in the block(multiple times).
           cy.log('This is Login block');

      })
    
      afterEach(() => {
        // runs after each test in the block(multiple times).
          cy.log('This is Logout block');

      })
    
      after(() => {
        // runs once after all tests in the block
        // statement comes under exist criteria e.g. report generation.
          cy.log('This is Tear down block');

      })

      it('searching',function(){

          cy.log('This is searching Test');

      })

      it('Advanced searching',function(){

          cy.log('This is Advanced searching Test');

    })

      it('Listing product',function(){

          cy.log('This is Listing product Test');

    })
})