const fs = require('fs');

class LogoGenerator {
  generateLogo(text, textColor, shape, shapeColor) {
    // Create SVG code based on user inputs
    const svgCode = `
      <svg width="300" height="200">
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
        <${shape} fill="${shapeColor}" width="100" height="100" x="150" y="50" />
      </svg>
    `;

    // Save SVG code to a file named logo.svg in the examples folder
    fs.writeFileSync('examples/logo.svg', svgCode);

    console.log('Generated logo.svg');
  }
}

module.exports = new LogoGenerator();