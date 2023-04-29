
const fs = require('fs')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'logoCharacters',
    message: 'Enter up to three characters',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Text Color? Enter a color keyword (OR a hexadecimal number)',
  },
  {
    type: 'list',
    name: 'logoShape',
    message: 'Choose a shape',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Shape Color? Enter a color keyword (OR a hexadecimal number)',
  },
];

class CLI {
  constructor() {
    inquirer.prompt(questions).then((answers) => {
      const { logoShape, shapeColor, textColor, logoCharacters } = answers;

      let newShape;
      switch (logoShape) {
        case 'circle':
          newShape = new Circle(shapeColor, textColor, logoCharacters);
          break;
        case 'triangle':
          newShape = new Triangle(shapeColor, textColor, logoCharacters);
          break;
        case 'square':
          newShape = new Square(shapeColor, textColor, logoCharacters);
          break;
        default:
          console.log('You are the weakest link. Goodbye.');
          return;
      }

      const svg = `<svg>${createLogo(newShape, textColor, logoCharacters, shapeColor)}</svg>`;
      const filename = `${logoCharacters}.${logoShape}.${shapeColor}.svg`;
      const filepath = `./examples/${filename}`;

      fs.writeFile(filepath, svg, (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`Generated ${filename}`);
      });
    });
  }
}

class Shape {
  constructor(logoShapeColor, logoShape, logoText, logoTextColor) {
    this.logoShape = logoShape;
    this.logoShapeColor = logoShapeColor;
    this.logoText = logoText;
    this.logoTextColor = logoTextColor;
  }
}

class Circle extends Shape {
  constructor(shapeColor, textColor, logoText) {
    super(shapeColor, 'circle', logoText, textColor);
    this.radius = 50;
    this.centerX = 50;
    this.centerY = 50;
  }

  render() {
    return `<circle cx="${this.centerX}" cy="${this.centerY}" r="${this.radius}" fill="${this.logoShapeColor}" stroke-width="1"/>`;
  }
}


  function createLogo(logoShape, logoTextColor, logoText, logoShapeColor) {
    if (logoText.length > 3 ) {
        throw new Error ('Logo text must be less than 3 characters');
    }
    return `<svg version="1.1" width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">${logoShape.render(logoShapeColor)}<text x="50%" y="60%" text-anchor="middle" fill="${logoTextColor}" font-size="50">${logoText}</text></svg>`
}
const cli = new CLI();
