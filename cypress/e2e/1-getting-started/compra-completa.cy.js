/// <reference types="cypress" />
 
describe('Flujo completo de compra en SwagLabs', () => {
  it('Realiza login, agrega productos y completa la compra', () => {
    const urlPagina = Cypress.env('urlPagina');
    const urlHome = Cypress.env('urlHome');
    const userStandard = Cypress.env('userStandard');
    const password = Cypress.env('password');
 
    // 1️⃣ Login
    cy.visit(urlPagina);
    cy.get('#user-name').type(userStandard);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
 
    cy.url().should('eq', urlHome);
 
    // 2️⃣ Agregar productos al carrito
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_badge', { timeout: 10000 }).should('have.text', '2');
 
    // 3️⃣ Ir al carrito
    cy.get('.shopping_cart_link', { timeout: 10000 }).should('be.visible').click();
    cy.url().should('contain', 'cart.html');
    cy.contains('Sauce Labs Backpack').should('be.visible');
    cy.contains('Sauce Labs Bike Light').should('be.visible');
 
    // 4️⃣ Checkout paso 1
    cy.get('[data-test="checkout"]').click();
    cy.url().should('contain', 'checkout-step-one.html');
 
    // 5️⃣ Llenar formulario
    cy.get('[data-test="firstName"]').type('Pedro');
    cy.get('[data-test="lastName"]').type('Toro');
    cy.get('[data-test="postalCode"]').type('760001');
    cy.get('[data-test="continue"]').click();
 
    // 6️⃣ Confirmar compra
    cy.url().should('contain', 'checkout-step-two.html');
    cy.get('[data-test="finish"]').click();
 
    // 7️⃣ Validar mensaje final
    cy.url().should('contain', 'checkout-complete.html');
    cy.contains('Thank you for your order!').should('be.visible');
  });
});