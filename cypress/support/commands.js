// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setPreconditions', () => {
    // Change currency to "Euro"
    cy.get('[aria-label="Menu"]').click()
    cy.get('[data-testid="header-mobile-menu-currency-picker-menu-item"]').click()
    cy.get('[data-testid="Suggested for you"]').contains('Euro').click()

    // Change language to "English (US)"
    cy.get('[aria-label="Menu"]').click()
    cy.get('[data-testid="header-mobile-menu-language-picker-menu-item"]').click()
    cy.get('[data-testid="All languages"]').contains('English (US)').click()

    // Verify that currency and language are successfully set
    cy.get('[aria-label="Menu"]').click()
    // Currency verification
    cy.get('[data-testid="header-mobile-menu-currency-picker-menu-item"]')
        .should('contain', 'Euro')
    // Language verification
    cy.get('[data-testid="header-mobile-menu-language-picker-menu-item"]')
        .should('contain', 'English (US)')
    // Close settings window
    cy.get('[aria-label="Close menu"]').click()
})