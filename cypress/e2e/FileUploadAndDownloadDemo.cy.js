/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

describe("File upload and Download demo",()=>{

    it('File Upload Test', function(){

        cy.visit('https://trytestingthis.netlify.app/');
    
       //cy.get('#myfile').attachFile('Image.jpg');
       //cy.get('#myfile').attachFile('Hooks.png');
       cy.get('#myfile').attachFile('File Upload.txt');
       cy.log("File uploaded successfully");
    })
    
    it('File Download Test', function(){
    
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg');
    
    cy.downloadFile('https://en.wikipedia.org/w/index.php?title=Special:DownloadAsPdf&page=Talk%3ACypress&action=show-download-screen',
    'filedownload','aboutcypress.pdf');
    cy.log("File downloaded successfully");

    // After the file downloads, you can access the file using any of the following Cypress commands. 
    //If the file is a document such as .doc, .csv, .pdf, etc., you can access it using the cy.readFile to read and verify it’s contents.
    cy.readFile("./filedownload/aboutcypress.pdf").should("contain","Download as PDF - Wikipedia")

    // However, to verify any other file type, such as .zip,.png,.jpg, etc., you need to use the cy.verifyDownload command 
    //to verify if the file downloaded or not.
    // Note - File is only downloaded into the 'cypress/downloads' i.e. downloads folder not at any path.
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','cypress/mydownloads','example.jpg');
    cy.verifyDownload("example.jpg")
    
    
    cy.log("Verify downloaded file successfully")
    
    })

})
