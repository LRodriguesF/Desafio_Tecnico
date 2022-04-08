
Cypress.Commands.add("login",() => {
    cy.get('#h_usr-link').click()
    cy.get('#h_usr-signin').click()
    cy.get('#email-input').type(Cypress.env("EMAIL_USUÁRIO"))
    cy.get('#password-input').type(Cypress.env("SENHA_USUÁRIO"))
    cy.get('#login-button').click()
})