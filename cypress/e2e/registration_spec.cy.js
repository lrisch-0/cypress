describe('Teste de Formulário de Prática', () => {
    beforeEach(() => {
        cy.viewport(1280, 720); // Define o tamanho do viewport
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Ignora erros não tratados
        });

        cy.visit('https://demoqa.com/automation-practice-form'); // Acessa a página do formulário
    });

    const preencherPrimeiroNome = (nome) => {
        cy.get('#firstName').type(nome); // Preenche o primeiro nome
    };

    const preencherSobrenome = (sobrenome) => {
        cy.get('#lastName').type(sobrenome); // Preenche o sobrenome
    };

    const preencherEmail = (email) => {
        cy.get('#userEmail').type(email); // Preenche o email
    };

    const selecionarGenero = (genero) => {
        cy.get(`label[for="gender-radio-${genero}"]`).click(); // Seleciona gênero
    };

    const preencherNumeroTelefone = (numero) => {
        cy.get('#userNumber').type(numero); // Preenche o número de telefone
    };

    const selecionarDataNascimento = (dia) => {
        cy.get('#dateOfBirthInput').click(); // Clica no campo de data de nascimento
        cy.get('.react-datepicker__month-container')
            .find('.react-datepicker__day')
            .contains(dia).click(); // Seleciona o dia desejado
    };

    const preencherEndereco = (endereco) => {
        cy.get('#currentAddress').type(endereco); // Preenche o endereço
    };

    const selecionarEstado = (estado) => {
        cy.get('#state').click(); // Seleciona o estado
        cy.get('#state > div > div').contains(estado).click(); // Seleciona o estado
    };

    const selecionarCidade = (cidade) => {
        cy.get('#city').click(); // Seleciona a cidade
        cy.get('#city > div > div').contains(cidade).click(); // Seleciona a cidade
    };

    const enviarFormulario = () => {
        cy.get('#submit').click(); // Clica no botão de enviar
    };

    const fecharModal = () => {
        cy.get('#closeLargeModal').click({ force: true }); // Fecha a modal
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

            // Tira o screenshot
            cy.screenshot(screenshotFilePath).then(() => {
                const fullScreenshotPath = `cypress/screenshots/${screenshotFilePath}`; // Caminho completo
                // Adiciona timestamp à captura
                return cy.task('addTimestampToScreenshot', fullScreenshotPath);
            });
        });

        // Verifica se a mensagem de sucesso está visível
        cy.get('.modal-title').should('contain', 'Thanks for submitting the form'); // Verifica a mensagem de sucesso

        // Fecha a modal
        fecharModal();
    });
});
