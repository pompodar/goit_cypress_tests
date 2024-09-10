describe('Visit Homepage and Navigate to Fullstack Course', () => {
  beforeEach(() => {
    // Ignore uncaught exceptions in Cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('should navigate to the Fullstack Course page, open the modal, fill the form, and verify successful submission', () => {
    cy.visit('https://goit.global');

    // Click on the first product card's link
    cy.get('.product-card').first().find('a').click();

    // Verify that the URL is correct
    cy.url().should('eq', 'https://goit.global/ua/courses/fullstack/');

    // Click on the button that triggers the modal opening
    cy.get('[data-modal-open]').first().click();

    // Ensure the modal is visible after clicking the button
    cy.get('[data-modal]').should('be.visible');

    // Ensure that the body class for modal open is applied
    cy.get('body').should('have.class', 'scroll-hidden');

    // Fill in the form fields within the modal
    cy.get('[data-modal] input[name="fields[name]"]').type('test');
    cy.get('[data-modal] input[name="fields[phone]"]').type('347526911');
    cy.get('[data-modal] input[name="fields[email]"]').type('test12@qa.team');
    cy.get('[data-modal] input[name="user-policy"]').check();

    // Submit the form
    cy.get('[data-modal] button.main-btn.btn.btn-primary.text-center.max-w-full').click();

    // Check for the success message in the modal
    cy.get('[data-modal] .modal-message').should('be.visible');
    cy.get('[data-modal] [data-text-success]').should('be.visible').and('contain', 'Дякуємо, інформація надіслана успішно.Ми зв’яжемося з вами якнайшвидше.');

    // Check if the other messages are hidden
    cy.get('[data-modal] [data-text-error]').should('not.be.visible');
  });
});
