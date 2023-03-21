///<reference types="cypress"/>

describe("Handling Web table", ()=>{

    beforeEach("Login the application", ()=>{
    
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").clear().type("demo")
        cy.get("#input-password").clear().type("demo")
        cy.get("button[type='submit']").click()

        // close the pop up window
        cy.get(".btn-close").click()

        cy.get("#menu-customer>a").click()

        cy.get("#menu-customer>ul>li:first-child").click()
    })
    
       it("Check number of rows and columns in table",()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length","10")

        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length","7")

       })

       it("Check cell data from specific row and column",()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("princytrainings4@gmail.com")

       })

       it("Read all the rows and columns data in the first page",()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows)=>{

            // get the specific data in row
            cy.wrap($row).within(()=>{

                //td -- for getting all the columns
                cy.get("td").each(($column, index, $columns)=>{

                    cy.log($column.text())

                })
            })
        
        })

       })

       it.only("Pagination",()=>{

        //Find out total number of pages
        cy.get("div[class='col-sm-6 text-end']").then((e)=>{

            let myText = e.text(); // text display - Showing 1 to 10 of 9147 (915 Pages)
            let totalPages = myText.substring(myText.indexOf("(")+1, myText.indexOf("Pages")-1)
            cy.log("Total numbers are pages in table are =======>"+totalPages)

        })
       
        // To read some pages e.g.5,10,12 etc.
       let totalNoPages = 10
       for(let p=1;p<=totalNoPages;p++)
       {
         if(totalNoPages>1)
         {
            cy.log("Current active page is ====="+p)
            cy.get("ul[class='pagination']>li:nth-child("+p+")").click()
            cy.wait(2000)

            cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row,index,$rows)=>{

                cy.wrap($row).within(()=>{
                    cy.get("td:nth-child(3)").then((e)=>{
                        cy.log(e.text()) //email
                    })
                })
            })

       
         }}
    
    })
})