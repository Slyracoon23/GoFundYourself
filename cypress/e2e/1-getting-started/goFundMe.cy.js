/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('GoFundMe app', () => {
  it('should navigate to the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // // Find a link with an href attribute containing "about" and click it
    // cy.get('a[href*="about"]').click()

    // // The new url should include "/about"
    // cy.url().should('include', '/about')

    // // The new page should contain an h1 with "About page"
    // cy.get('h1').contains('About Page')
  })
})
