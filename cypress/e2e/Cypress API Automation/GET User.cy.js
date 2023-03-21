/// <reference types="cypress" />

describe('GET User API Tests', function(){

     // set global variable access Token
    var accessToken = '5fe3bf588f42e16a54fa4a5dcc32a3f51b4d7d95bd85f50e2ea2800ce0932c51';

    it('GET Users', function(){

        cy.wait(10000);
        cy.request({

            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'Authorization' : 'Bearer '+accessToken
            }
        }).then((res)=>{

            expect(res.status).to.equal(200);
            expect(res.statusText).to.equal('OK');
            //expect(res).to.have.property('name','Aslesha Dutta');
            
        })

    })

    it('GET Users Details based on ID', function(){

        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users/2549',
            headers : {
                'Authorization' : 'Bearer '+accessToken
            }

        }).then((res)=>{

            // Validatations on API Response -
            expect(res.status).to.equal(200);
            expect(res.statusText).to.equal('OK');
            expect(res.isOkStatusCode).to.equal(true);

            expect(res.body).to.have.property('name','Anwesha Agarwal IV');
            expect(res.body).to.have.property('email','anwesha_iv_agarwal@pfeffer-rempel.co');
            expect(res.body).to.have.property('gender','male');
            expect(res.body).to.have.property('status','inactive');


            
        })


    })

})