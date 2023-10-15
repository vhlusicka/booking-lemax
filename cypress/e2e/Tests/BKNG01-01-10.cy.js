/// <reference types="cypress" />

context('BKNG01-01-10', () => {
    beforeEach(() => {
        // Visit web
        cy.visit('/')
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
    it('User can change number of persons and rooms', () => {
        // Open persons box
        cy.get('[data-testid="occupancy-config"]').click()
        // Increase "Adults" to 3
        cy.get('.a7a72174b8').eq(0).find('.eedba9e88a').eq(1).click()
        // Increase "Children" to 1
        cy.get('.a7a72174b8').eq(1).find('.eedba9e88a').eq(1).click()
        // Increase "Rooms" to 2
        cy.get('.a7a72174b8').eq(2).find('.eedba9e88a').eq(1).click()
        // Click on "Done"
        cy.get('[data-testid="occupancy-popup"]').contains('Done').click()

        // Verify that entered values for persons are visible in the persons button
        cy.get('.a8887b152e').eq(2).should('have.text', '3 adults · 1 child · 2 rooms')
    })
})
  