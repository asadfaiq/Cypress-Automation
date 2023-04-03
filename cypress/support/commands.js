Cypress.Commands.add('login', (username, password) =>
 {

   
    cy.get('#mat-input-0').type(username,{force:true})
    cy.get('#mat-input-1').type(password,{force:true})
    cy.get('div#target button[type="submit"]').click({force:true})
    cy.wait(10000)
    cy.contains('Home').click({force:true})

 })


     
 Cypress.Commands.add('Home', (ExpenseName, Amount,ExpenseDate) =>
 {

   
    cy.get('#mat-input-4').click({force: true}).type('Tax Expense',{force: true})

    cy.get('#mat-input-5').click({force: true}).type('5000',{force: true})
    cy.get('#mat-input-6').click({force: true}).type('3/31/2023',{force: true})
    

 })

