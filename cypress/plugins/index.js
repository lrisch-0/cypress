const sharp = require("sharp");

// Importações para a integração do Cucumber com ESBuild
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const nodePolyfills = require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = async (on, config) => {
    // Adiciona o preprocessor do Cucumber que permite a produção de JSON
    await addCucumberPreprocessorPlugin(on, config);

    // Usa o ESBuild para o bundler ao processar arquivos
    on(
        'file:preprocessor',
        createBundler({
            plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        })
    );

    // Tarefa para adicionar timestamp à captura de tela
    on('task', {
        addTimestampToScreenshot(screenshotPath) {
            const outputFilePath = screenshotPath.replace('.png', '-with-timestamp.png');
            const timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

            return sharp(screenshotPath)
                .composite([{
                    input: Buffer.from(
                        `<svg width="400" height="60">
                          <text x="10" y="30" font-size="30" fill="white">${timestamp}</text>
                        </svg>`
                    ),
                    top: 10,
                    left: 10,
                }])
                .toFile(outputFilePath)
                .then(() => outputFilePath) // Retorna o caminho do arquivo modificado
                .catch(err => {
                    console.error(err);
                    throw new Error('Could not add timestamp to screenshot.');
                });
        }
    });

    return config; // Retorna a configuração para que o Cypress a utilize
};
