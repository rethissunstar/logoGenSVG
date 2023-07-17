const fs = require('fs');

const generateSVG = (shape) => {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <g>
      ${shape.render()}
      <text x="150" y="114" text-anchor="middle" font-size="45" fill="${shape.textColor}">${shape.logoName}</text>
    </g>    
  </svg>
  `;
};

class LogoGenerator {
  generateLogo(shape) {
    // Generate the SVG code using the provided shape and its render method
    const svgCode = generateSVG(shape);

    // Save the SVG code to a file named logo.svg
    fs.writeFileSync('examples/logo.svg', svgCode);

    console.log('Generated logo.svg');
  }
}

module.exports = new LogoGenerator();
