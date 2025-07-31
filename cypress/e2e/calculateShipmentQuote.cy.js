describe('International Shipment Quote - POS Malaysia', () => {
  it('should calculate shipment quote from Malaysia to India', () => {
    // Step 1: Visit the shipment rate calculator page
    cy.visit('https://www.pos.com.my/send/ratecalculator');

    // Step 2: Enter "35600" as the From Postcode
    cy.get('input[formcontrolname="postcodeFrom"]')
      .scrollIntoView()
      .type('35600', { force: true });

    // Step 3: Select "India" as the To Country
    cy.get('input[name="country"]').last().click({ force: true });
    cy.contains('span', 'India').click({ force: true });

    // Step 4: Enter "1" as the Weight (kg)
    cy.get('input[placeholder="eg. 0.1kg"]')
      .scrollIntoView()
      .type('1', { force: true });

    // Step 5: Click Calculate button
    cy.contains('button', 'Calculate').click({ force: true });

    // Step 6: Verify multiple shipment options are displayed
    cy.get('.rate-result-card')
      .should('exist')
      .and('have.length.greaterThan', 1); // adjust this based on actual DOM

  });
});
