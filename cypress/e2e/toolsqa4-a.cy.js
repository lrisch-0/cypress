describe('acessar entrada e saída', () => {
    beforeEach('', () => {
        cy.visit("https://demoqa.com/");
    });

    it('Upload Files', () => {

        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-7').click()
        cy.get('#uploadFile').selectFile('sampleFile.jpeg')  
        cy.get('#file-submit').click()
        cy.get('#downloadButton').contains('sampleFile.jpeg')
       

    });
    
});