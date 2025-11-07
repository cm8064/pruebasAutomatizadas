/// <reference types="cypress" />
 
const urlPagina = 'https://www.saucedemo.com/';
const urlHome = 'https://www.saucedemo.com/inventory.html';
const password = 'secret_sauce';
const userStandard = 'standard_user';
 
describe('Visitar la página de login', () => {
  beforeEach(() => {
    // Ir a la página principal
    cy.visit(urlPagina);
    cy.url().should('contain', 'saucedemo');
  });
 
  it('Inicio de sesión usuario estándar', () => {
    // Completar usuario y contraseña
    cy.get('#user-name').type(userStandard);
    cy.get('#password').type(password);
   
    // Hacer clic en Login
    cy.get('#login-button').click();
 
    // Verificar que haya iniciado sesión correctamente
    cy.url().should('eq', urlHome);
  });
});
 