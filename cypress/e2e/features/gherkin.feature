Feature: Teste de Formulário de Prática

  Scenario: Deve preencher e enviar o formulário com sucesso
    Given que eu estou na página do formulário de prática
    When eu preencho o primeiro nome com "John"
    Then eu preencho o sobrenome com "Doe"
    Then eu preencho o email com "john.doe@example.com"
    Then eu seleciono o gênero masculino
    Then eu preencho o número de telefone com "1234567890"
    Then eu seleciono a data de nascimento "18"
    Then eu preencho o endereço com "123 Main St"
    Then eu seleciono o estado "NCR"
    Then eu seleciono a cidade "Delhi"
    Then eu envio o formulário
    Then eu vejo uma mensagem de sucesso "Thanks for submitting the form"
    Then eu tiro uma captura de tela do formulário enviado
    Then eu fecho a modal
