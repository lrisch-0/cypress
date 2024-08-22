let timestamp;

Cypress.Screenshot.defaults({
  onBeforeScreenshot($el) {
    // Cria um elemento para o timestamp
    timestamp = document.createElement('div');
    timestamp.innerText = new Date().toLocaleString("pt-BR"); // Mostra a data no formato local
    timestamp.style.position = 'absolute'; // Posição absoluta
    timestamp.style.color = 'black'; // Cor do texto
    timestamp.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Fundo branco semi-transparente para melhor visibilidade
    timestamp.style.padding = '5px'; // Adiciona algum espaço
    timestamp.style.top = '10px'; // Localização no topo
    timestamp.style.right = '10px'; // Localização à direita
    timestamp.style.zIndex = '1000'; // Garante que o texto fique na frente

    // Adiciona o timestamp ao elemento sendo capturado
    $el[0].appendChild(timestamp);
  },
  onAfterScreenshot($el) {
    // Remove o timestamp após a captura
    if (timestamp) {
      timestamp.remove();
    }
  },
});
