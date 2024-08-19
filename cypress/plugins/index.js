const sharp = require("sharp");

module.exports = (on, config) => {
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
};
