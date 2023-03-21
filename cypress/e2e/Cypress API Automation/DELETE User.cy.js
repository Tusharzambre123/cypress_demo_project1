/// <reference types="cypress" />

describe('Create User(POST) API Tests', function(){

    let randomText =''
    let testEmail =''   
   
       it('POST API', function(){
   
           var pattern ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
           for(var i=0;i<10;i++)
           {
               randomText = randomText + pattern.charAt(Math.floor(Math.random() * pattern.length));
               testEmail = randomText + '@gmail.com'
           }
   
            // 1. create user(POST) -   
           cy.request({
   
                method : "POST",
                url : 'https://gorest.co.in/public/v2/users',
   
                headers : {
                   'Authorization' : 'Bearer 3a32be825970ebc31834e8d571e53753e2719e57fd764050dab537c6f4eda8b3'
               },
                body : {
                    
                        "name": "Sachin Verma",
                        "email": "sachinverma01234@gmail.com",
                        "gender": "male",
                        "status": "active"
                    
                       }
           }).then((res)=>{
   
               // Printing JSON Payload response which are getting
               //cy.log(res);
               cy.log(JSON.stringify(res)); // convert string into JSON string by using stringify method
   
               // Validatations on API Response -
               expect(res.status).to.equal(201);
               expect(res.statusText).to.equal('Created');
               expect(res.body).has.property('name', 'Sachin Verma');
               expect(res.body).has.property('email', 'sachinverma01234@gmail.com');
               expect(res.body).has.property('gender', 'male');
               expect(res.body).has.property('status', 'active');
   
               //cy.wait(5000);
   
           }).then((res)=>{
   
               // Capture id from post API response and use it next DELETE call to delete the user data
               const userId = res.body.id;
               cy.log('User ID is '+userId);
   
               // 2. PUT user -
               cy.request({
   
                   method : 'DELETE',
                   url : 'https://gorest.co.in/public/v2/users/'+userId,
                   headers : {
                       'Authorization' : 'Bearer 3a32be825970ebc31834e8d571e53753e2719e57fd764050dab537c6f4eda8b3'
                     }
               }).then((res)=>{
                     expect(res.status).to.equal(404);
                     
               })
           })
       });
   
   })
   