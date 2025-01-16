import '@cypress/xpath';
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
// This command navigates to page
/**
 * @name navigateToPage
 *@description set the viewe port and send the user to home page
 *@author Luis Rivera
 */
Cypress.Commands.add('navigateToPage', () => {
    cy.viewport('iphone-8')
    cy.visit('/'); })

/**
 * @name createRandom
 * @param limit
 *@description return a random number from 1 to the limit argument
 *@author Luis Rivera
 */
export function createRandom(limit){
    return Math.ceil(Math.random()*limit)
}

