
///  <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Test Suite',  function()
{
    it('Go to Login' , function()
    {
        cy.fixture('example').then(function(data)
        { //example is fixture class name
            this.data = data // object 
            cy.visit('/')
            cy.wait(1000)
            cy.login(this.data.LoginPage.username,this.data.LoginPage.password)

        })
    })

    it('Go to Home' , function()
    {
        cy.fixture('example').then(function(data)
        { //example is fixture class name
            this.data = data // object 
            
            cy.Home(this.data.LoginPage.ExpenseName,this.data.LoginPage.Amount,this.data.LoginPage.ExpenseDate,this.data.LoginPage.ExpenseCategory,this.data.LoginPage.PaymentType)

        })
    })
  
        
    
})
    

    

