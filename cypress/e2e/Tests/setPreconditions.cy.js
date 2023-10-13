/// <reference types="cypress" />

context('setPreconditions', () => {
    beforeEach(() => {
        cy.visit('https://www.booking.com/')

        // Decline the cookies
        cy.get('#onetrust-banner-sdk').contains('Decline').click()
    })
    
    // This is needed to avoid throwing an error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    // https://on.cypress.io/interacting-with-elements
  
    it('Setting currency and language', () => {
        // Change currency to "Euro"
        cy.get('[aria-label="Menu"]').click()
        cy.get('[data-testid="header-mobile-menu-currency-picker-menu-item"]').click()
        cy.get('[data-testid="Suggested for you"]').contains('Euro').click()

        // Change language to "English (US)"
        cy.get('[aria-label="Menu"]').click()
        cy.get('[data-testid="header-mobile-menu-language-picker-menu-item"]').click()
        cy.get('[data-testid="All languages"]').contains('English (US)').click()

        // Verify that currency and language are successfully set
        

        cy.pause()
    })


  })
  