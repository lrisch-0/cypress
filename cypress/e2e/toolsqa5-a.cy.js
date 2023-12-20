describe('validar upload arquivo', () => {
    beforeEach('', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
    });

    it('Upload com sucesso', () => {

       cy.get('#file-upload') 
         .should('be.visible')
         .selectFile('sampleFile.jpeg')  
       cy.get('#file-submit').click()
       cy.contains('File Uploaded!').should('be.visible')
         

    });
    
});