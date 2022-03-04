/// <reference types="Cypress"/>

before(() => {
    cy.visit('https://www.gria.io/oportunidades')
})

it('Validar dados válidos nos campos “Pesquisar” e “Cidade ou estado”',()=>{
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Analista de Qualidade de Software - QA Júnior')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Brasil')
    cy.get('.jss112').click()
    cy.get('.jss307').contains('Analista de Qualidade de Software - QA Júnior').should('be.visible')
    cy.get('.jss314 > .MuiTypography-root').contains('Brasil').should('be.visible')
})