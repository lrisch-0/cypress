describe('acessar entrada e saída', () => {
    beforeEach('', () => {
        cy.visit("https://demoqa.com/");
    });

    it('Radio Button', () => {

        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click()
        cy.get('[type="radio"]').check('yesRadio')

       

    });
    
});