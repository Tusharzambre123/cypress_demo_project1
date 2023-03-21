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
                    
                        "name": "Vaibhav Sharma",
                        "email": "vibhavsharma0@gmail.com",
                        "gender": "Male",
                        "status": "active"
                    
                       }
           }).then((res)=>{
   
               // Printing JSON Payload response which are getting
               //cy.log(res);
               cy.log(JSON.stringify(res)); // convert string into JSON string by using stringify method
   
               // Validatations on API Response -
               expect(res.status).to.equal(201);
               expect(res.statusText).to.equal('Created');
               expect(res.body).has.property('name', 'Vaibhav Sharma');
               expect(res.body).has.property('email', 'vibhavsharma0@gmail.com');
               expect(res.body).has.property('gender', 'male');
               expect(res.body).has.property('status', 'active');
   
               //cy.wait(5000);
   
           }).then((res)=>{
   
               // Capture id from post API response and use it next PUT call to update the data
               const userId = res.body.id;
               cy.log('User ID is '+userId);
   
               // 2. PUT user -
               cy.request({
   
                   method : 'PUT',
                   url : 'https://gorest.co.in/public/v2/users/'+userId,
                   headers : {
                       'Authorization' : 'Bearer 3a32be825970ebc31834e8d571e53753e2719e57fd764050dab537c6f4eda8b3'
                     },
                     body : {
        
                            "name": "Vaibhav Sharma Automation",
                            "email": "vibhavsharmaautomation0@gmail.com",
                            "gender": "male",
                            "status": "inactive"
                        }
               }).then((res)=>{
                     expect(res.status).to.equal(200);
                     expect(res.statusText).to.equal('OK');
                     expect(res.body).has.property('id', userId);
                     expect(res.body).has.property('name', 'Vaibhav Sharma Automation');
                     expect(res.body).has.property('email', 'vibhavsharmaautomation0@gmail.com');
                     expect(res.body).has.property('gender', 'male');
                     expect(res.body).has.property('status', 'inactive');
               })
           })
       });
   
   })
   