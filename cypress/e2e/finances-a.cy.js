describe('cadastrar entrada e saída', () => {
    it('nova transaçao de entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
         
        cy.get('#transaction > .button').click()
        cy.get('#description').type('Mesada')
        cy.get('#amount').type('25')
        cy.get('#date').type('2023-11-01')
        cy.get('button').click()
        cy.get('tbody tr').should('have.length', 1)
        cy.get('tbody tr').should('have.length.greaterThan', 0)
        cy.get('tbody tr .description').should('have.text', 'Mesada')
    });
    
});