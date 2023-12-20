describe('Validar Formulario', () => {
    beforeEach('', () => {
        cy.visit("https://demoqa.com/text-box");
    });

    it('Validar Text Box', () => {

        cy.get('#userName').type('Leandro')
        cy.get('#userEmail').type('lrisch@gmail.com')
        cy.get('#currentAddress').type('Seixal')
        cy.get('#permanentAddress').type('Seixal')
        cy.get('#submit').click()   

    });
    
});