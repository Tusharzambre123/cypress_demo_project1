// Assertion - To check/verify the given test
// 2 types of assertion -
//  1. Implicit - in-built assertions, some action on object executed at back end like should() and()
//  2. Explicit - not in-built assertions, user defined assertion like assert(), expect()

// Launch the application in the browser -
it(' Implicit Assertions', () =>{

    cy.visit('https://example.cypress.io');

    // Stop cy commands from running and allow interaction with the application under test. 
    // You can then "resume" running all commands or choose to step through the "next" commands from 
    //the Command Log.
    cy.pause().debug();

    //assert/check the url -
    cy.url().should('include','https://example.cypress.io');

    // assert/check the title of the page -
    cy.title().should('include','Kitchen Sink');

    // click on the get link -
    cy.contains('get').click();

    //// Should be on a new URL which includes '/commands/querying'
    cy.url().should('include','/commands/querying');
   

    
    // 1. Implicit Assertions -
    // should-contain - when we get any object/element then add should-contain assertion
    // should-have - To check different attributes of element - id,class,length
    // class - validate element have or have not mentioned class
    // id - validate element have or have not mentioned id
    // length - validate/check no. of elements returned by previous chained command
    // should-be - to check the element/object is visible, not visible, disable, enable on screen.
    // should-include - // assert the element's text includes the given substring
    // and - when we have multiple assertions then we chained assertion using and()
    

    cy.get('#query-btn')
            .should('contain','Button')
            .should('have.class','query-btn btn btn-primary')
            .should('have.id','query-btn')
            .should('be.visible')
            .should('be.enabled')
            .should('include.text','Butt')
            .should('match','Button')
            .should('have.length',1);

   // to get attribute of element and verify that attribute 
    cy.get('#query-btn').invoke('attr','id').should('equal','query-btn');
    cy.get('#query-btn').invoke('attr','class').should('equal','query-btn btn btn-primary'); 
    
    // check whether text matches regular expression
    // 1st invoke jQuery method text() and validate it using regular expression
    cy.get('#query-btn').invoke('text').should('match',/Button/i);

    // use cy.contains to find an element with its text
    // matching the given regular expression -
    cy.contains('#query-btn', /Button/i);
    
    // go to previous page -
    cy.go('back');

    // click on the Traversal link -
   //  cy.get('.home-list > :nth-child(2) > :nth-child(1)')
   //        .click()
   //        .should('have.text','Traversal')
   //        .should('be.visible')
   //        .should('have.length',1);

          // validate text of dropdown tab -
         // cy.get('.dropdown-toggle').should('include.text','Commands');

          // validate dropdown tab on screen -
         // cy.get('.dropdown-toggle').should('be.visible');        
      })

      // Explicit Assertions -
      // 1. expect()
      // 2. assert()

      it('Explicit Assertions - expect()', ()=>{

          // 1. expect() -Explicit assertions are validated by using expect() method.

        // The explicit object the boolean - true 
        //Asserts that the target is strictly (===) equal to true.
        //expect(true).to.be.true;

        // The explicit object the boolean - false
        // Asserts that the target is strictly (===) equal to false.
        // expect(false).to.be.false;

         // To assert that the target is equal to its expected value, rather than not equal to true
         // expect(false).to.not.be.true;
         // expect(false).to.not.equal(true);

         // expect(2).to.be.equal(2);
         // expect(3).to.not.equal(4);

         // .not - Negates/neglect all assertions that follow in the chain.
         // expect(function () {}).to.not.throw();
         // expect({a: 1}).to.not.have.property('b');
         // expect([2,5]).to.be.an('array').that.does.not.include('2');

         //Asserts that the target’s type is equal to the given type. Types are case insensitive.
         // expect('India').to.be.a('string');
         // expect([23,90]).to.be.a('array');

         //expect(true).to.be.a('string','True is not a string, it is boolean expression');
        // expect('kelltontech').to.include('tech');


         // Here explicit object is - object obj.
         // const obj = {foo : 'bar'}
         // expect(obj).to.equal(obj);
         // expect(obj).to.deep.equal({foo : 'bar'});
        


         // let name = 'Tushar';
         // expect(name).to.be.equal('Tushar');
         // expect(name).to.not.equal('TUSHAR');
         // expect(name).to.be.a('string');
         // expect(name).to.not.null;
         // expect(name).to.exist;
      // expect(name).to.not.exist;

         // var num = 57;
         // expect(num).to.not.null;

      })
          

      it('Explicit Assertion - assert()', ()=>{

          // 2. assert() -Explicit assertions are validated by using assert() method.
        // It allows us to pass explicit object.

        //to verify employee is object or not.
      // const employee = {name : 'Anil', age : 34}
       //const employee ={}; 
       //const employee =['Anil',34]; - //This is array not a object
      // assert.isObject(employee,'Value is object');


         //  Asserts that value is not an object of type ‘Object’ .
         //  .isNotObject(value, [message])
         //  let x = 'Good morning';
         //  assert.isNotObject(x,'x is not an object');

      //    Asserts that value is a number.
      //   .isNumber(value, [message])
         // var num = 78;
         // assert.isNumber(num,'Num is a number');

      //    Asserts that value is not a number.
      //   .isNotNumber(value, [message])
         // var data = '2 is a number';
         // assert.isNotNumber(data,'2 is string');

      //   Asserts that value’s type is name
      //  .typeOf(value, name, [message])
         // assert.typeOf({'name' : 'jon', 'age' : 54},'object','This is an object'); 
         // assert.typeOf(undefined, 'undefined', 'we have an undefined');

      // Asserts that value’s type is not name
      // .typeNotOf(value, name, [message])
      //assert.notTypeOf('tea', 'number', 'strings are not numbers');

   //   Asserts that object has a length or size with the expected value.
   //   .lengthOf(object, length, [message])
   //   assert.lengthOf([1,2,3], 3, 'array has length of 3');
   //   assert.lengthOf('Welcome', 7, 'string has length of 7');


       //assert.equal(4,4,'Not Equal');
       //assert.equal(4,-4,'Not Equal');
      // assert.notEqual(23,-23,'NOT EQUAL');

       //assert.strictEqual(32,'32',"Not Strictly Equals");
       //assert.strictEqual(32,32,"Not Strictly Equals");

         // Asserts strict inequality (!==) of actual and expected.
       // assert.notStrictEqual(3, '3', 'not strict equality');

    //     Asserts valueToCheck is strictly greater than (>) valueToBeAbove.
    //    isAbove(valueToCheck: number, valueToBeAbove: number, message?: string  ---> format
       // assert.isAbove(1,2,'Is Above Error');

    //     Asserts valueToCheck is strictly less than (<) valueToBeBelow.
    //     isBelow(valueToCheck: number, valueToBeBelow: number, message?: string
        // assert.isBelow(70,60,'Is Below Error')
           
         // Asserts valueToCheck is greater than or equal to (>=) valueToBeAtLeast.
         // .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
         // assert.isAtLeast(3, 3, '3 is greater or equal to the 3');
         // assert.isAtLeast(5, 2, '5 is greater or equal to 2');

         // Asserts valueToCheck is less than or equal to (<=) valueToBeAtMost.
         // .isAtMost(valueToCheck, valueToBeAtMost, [message])
         // assert.isAtMost(56,80,'56 is less than or equal to 80');




    //    Asserts that the target is neither null nor undefined.
    //    exists(value: number, message?: string
       //assert.exists(null,'Exist Error');
       //assert.exists(undefined,'Exist Error');

    //    notExists(value: any, message?: string
    //    Asserts that the target is either null or undefined.
       // assert.notExists(null,'Not Exist Error');

        //  Asserts that value is a string.
        //  isString(value: number, message?: string
          // assert.isString(90,'Value is String Error');

        // Asserts that value is not a string.
        //  isNotString(value: number, message?: string
       //  assert.isNotString(41,'Value is Not String Error')

        // Asserts that value is a number.
        // isNumber(value: number, message?: string
       //assert.isNumber('5','Is Number Error')

    //    Asserts that value is not a number.
    //     isNotNumber(value: number, message?: string
       //assert.isNotNumber('5','Is Not Number Error');

         // assert(expression, message/error message) -
        // assert('He'!=='she','He is not she');

         // .fail([message])
         //assert.fail('custom error message');

         //assert.fail(actual, expected, [message]
         //assert.fail(1, 2, "custom error message");

        // Asserts that actual is deeply equal to expected.
       // assert.deepEqual({ tea: 'green' }, { tea: 'green' },'Deeply equals');

         // Assert that actual is not deeply equal to expected.
        // assert.notDeepEqual('Goa','GOA','Not deeply equal');


      //   Asserts that value is true.
      //   .isTrue(value, [message])
      //   var x1 = true;
      //   assert.isTrue(x1, 'The value is true');

      //   Asserts that value is not true.
      //   .isNotTrue(value, [message])
      //   var tea = 'Tasty chai';
      //   assert.isNotTrue(tea, 'great,time for tea');

      // Asserts that the target does not contain any values.
      // For arrays and strings, it checks the length property. 
      // .isEmpty(target)
      // assert.isEmpty([]);
      // assert.isEmpty('');
      // assert.isEmpty({});

      // Asserts that the target contains values. 
      // For arrays and strings, it checks the length property.
      // .isNotEmpty(target)
      // assert.isNotEmpty([1, 2]);
      // assert.isNotEmpty('34');
      

         // assert.isUndefined(undefined,'Value is undefined');
         // assert.isDefined(null,'Value is defined');
         // assert.isDefined('null','Value is defined');

         let name = 'Rahul';
         expect(name).to.have.lengthOf(5)
         expect(name).to.have.length(5)



      })
          

          
        
       




