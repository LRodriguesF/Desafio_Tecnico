/// <reference types="Cypress"/>
before(() => {
    cy.visit('https://www.submarino.com.br/')
    cy.login(Cypress.env('EMAIL_USUÁRIO'), Cypress.env('SENHA_USUÁRIO'))
})
it('Inserir produto no favoritos',() => {
    cy.get('#h_search-input').type('Fogão')
    cy.get('#h_search-btn').click()
    cy.get('.bIoTYC > .grid__StyledGrid-sc-1man2hx-0 > :nth-child(1)').contains('Fogão').click()
    cy.get('.src__Title-sc-1u9ae8m-1').click()
    cy.get('.wish-icon-default').click()
    cy.get('.page__ProductWrapper-sc-wxdus-4').contains('Fogão')
})
