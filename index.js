const inquirer = require('inquirer');
const { generateLogo } = require('./lib/logoGenerator');
const { Circle, Square, Triangle } = require('./lib/shapes');

const runApplication = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'logoName',
      message: 'Enter the logo name:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal number):',
    },
  ]);

  let shape;

  switch (answers.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape');
      return;
  }

  shape.logoName = answers.logoName;
  shape.textColor = answers.textColor;
  shape.setColor(answers.shapeColor);

  await generateLogo(shape);
};

runApplication();