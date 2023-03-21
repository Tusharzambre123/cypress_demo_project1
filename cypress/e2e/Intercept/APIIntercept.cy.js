/// <reference types="cypress" />

describe('Intercept with cypress example', function(){

    it('Test API with simple intercept stubbing',function(){

      cy.visit('https://jsonplaceholder.typicode.com/');

      cy.intercept({
        path : '/posts',
      }).as('postsalias')

      cy.get("table:nth-of-type(1) a[href='/posts']").click();
      cy.wait('@postsalias').then((res)=>{
 
        cy.log(JSON.stringify(res));
        console.log(JSON.stringify(res));
        expect(res.response.body).to.have.length(100);
        expect(res.response.statusCode).to.equal(200);
        expect(res.response.statusMessage).to.equal('OK');
       // expect(res.response.headers.content-type).to.equal('application/json; charset=utf-8');
        expect(res.response.url).to.equal('https://jsonplaceholder.typicode.com/posts');
       // expect(res.response.headers.host).to.equal('jsonplaceholder.typicode.com');

      })
    })

    it('Mocking with intercept test', function(){

        cy.visit('https://jsonplaceholder.typicode.com/');

        cy.intercept('GET','/posts',{totalposts:5, name : 'Tushar'}).as('postsalias');
        cy.get("table:nth-of-type(1) a[href='/posts']").click();

        cy.wait('@postsalias');
    })

    it('Mocking with intercept test with dynamic fixture', function(){

        cy.visit('https://jsonplaceholder.typicode.com/');

        cy.intercept('GET','/posts',{fixture : 'createuser.json'}).as('postsalias');
        cy.get("table:nth-of-type(1) a[href='/posts']").click();

        cy.wait('@postsalias');
    })


})