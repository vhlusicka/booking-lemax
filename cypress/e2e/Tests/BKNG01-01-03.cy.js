/// <reference types="cypress" />

context('BKNG01-01-03', () => {
    beforeEach(() => {
        // Visit web
        cy.visit('https://www.booking.com/')
        // Decline the cookies
        cy.get('#onetrust-banner-sdk').contains('Decline').click()
        // Set language and currency
        cy.setPreconditions()
    })
    
    // This is needed to avoid throwing an error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    // The test starts here!
    it('User can select filtered result from "Where are you going" input field', () => {
        // Click on Destination textbox and type "Rovinj"
        cy.get('[data-testid="destination-container"]')
            .type('Rovinj')

        // Find the unique Rovinj match and select it (Regex used)
        cy.get('[data-testid="autocomplete-result"]').contains(/^Rovinj$/).click()

        // Verify that Rovinj is selected
        cy.get('[placeholder="Where are you going?"]')
            .should('have.attr', 'value', 'Rovinj, Croatia')
    })


  })
  