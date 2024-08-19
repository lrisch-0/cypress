describe('Teste de Formulário de Prática', () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Ignora erros não tratados
        });

        cy.visit('https://demoqa.com/automation-practice-form'); // Acessa a página do formulário
    });

    const preencherPrimeiroNome = (nome) => {
        cy.get('#firstName').type(nome);
    };

    const preencherSobrenome = (sobrenome) => {
        cy.get('#lastName').type(sobrenome);
    };

    const preencherEmail = (email) => {
        cy.get('#userEmail').type(email);
    };

    const selecionarGenero = (genero) => {
        cy.get(`label[for="gender-radio-${genero}"]`).click();
    };

    const preencherNumeroTelefone = (numero) => {
        cy.get('#userNumber').type(numero);
    };

    const selecionarDataNascimento = (dia) => {
        cy.get('#dateOfBirthInput').click(); // Clica no campo de data de nascimento
        cy.get('.react-datepicker__month-container')
            .find('.react-datepicker__day')
            .contains(dia).click(); // Seleciona o dia desejado
    };

    const preencherEndereco = (endereco) => {
        cy.get('#currentAddress').type(endereco);
    };

    const selecionarEstado = (estado) => {
        cy.get('#state').click();
        cy.get('#state > div > div').contains(estado).click();
    };

    const selecionarCidade = (cidade) => {
        cy.get('#city').click();
        cy.get('#city > div > div').contains(cidade).click();
    };

    const enviarFormulario = () => {
        cy.get('#submit').click(); // Clica no botão de enviar
    };

    const fecharModal = () => {
        cy.get('#closeLargeModal').click({ force: true });
    };

    it('Deve preencher e enviar o formulário com sucesso', () => {
        preencherPrimeiroNome('John');
        preencherSobrenome('Doe');
        preencherEmail('john.doe@example.com');
        selecionarGenero('1'); // '1' para masculino
        preencherNumeroTelefone('1234567890');
        selecionarDataNascimento('18'); // Seleciona o dia 18 de setembro
        preencherEndereco('123 Main St');
        selecionarEstado('NCR');
        selecionarCidade('Delhi');

        // Envia o formulário
        enviarFormulario();

        // Aguarda a modal aparecer e tira a captura de tela
        cy.get('.modal-title', { timeout: 10000 }).should('be.visible').then(() => {
            const screenshotFilePath = 'Formulario_enviado.png'; // Nome da imagem

            // Tira o screenshot e aguarda que o arquivo seja salvo
            return cy.screenshot(screenshotFilePath).then(() => {
                // Aguarda um pouco para garantir que o arquivo foi salvo
                cy.wait(500); // Espera 500 ms

                // Adiciona o timestamp à captura
                const fullScreenshotPath = `cypress/screenshots/${screenshotFilePath}`; // Caminho completo da imagem
                return cy.task('addTimestampToScreenshot', fullScreenshotPath); // Chama a task para adicionar o timestamp
            });
        });

        // Verifica se a mensagem de sucesso está visível
        cy.get('.modal-title').should('contain', 'Thanks for submitting the form');

        // Fecha a modal
        fecharModal();
    });
});
