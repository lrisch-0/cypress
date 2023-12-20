describe('acessar entrada e saída', () => {
    beforeEach('', () => {
        cy.visit("https://demoqa.com/");
    });

    it('Web Tables', () => {

        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
        cy.get('#addNewRecordButton').click() 
        cy.get('#firstName').type('Leandro')
        cy.get('#lastName').type('Risch')
        cy.get('#userEmail').type('lrisch@gmail.com')
        cy.get('#age').type('23')
        cy.get('#salary').type('1000')
        cy.get('#department').type('QA')
        cy.get('#submit').click()   
       

    });
    
});