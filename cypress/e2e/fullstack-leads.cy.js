describe('Visit Homepage and Navigate to Fullstack Course', () => {
  beforeEach(() => {
    // Ignore uncaught exceptions in Cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })
  })

  it('should navigate to the Fullstack Course page after clicking the first product card', () => {
    cy.visit('https://goit.global')

    // Click on the first product card's link
    cy.get('.product-card').first().find('a').click()

    // Verify that the URL is correct
    cy.url().should('eq', 'https://goit.global/ua/courses/fullstack/')
  })
})
