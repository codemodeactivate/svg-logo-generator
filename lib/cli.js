const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./questions')
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');


function createLogo(logoShape, logoTextColor, logoText, logoShapeColor) {
  if (logoText.length > 3) {
    throw new Error('Logo text must be less than 3 characters');
  }



  return `<svg version="1.1" width="300" height="300" viewBox="0 0 125 125" xmlns="http://www.w3.org/2000/svg">${logoShape.render(`${logoShapeColor}`)}<text x="50" y="60" text-anchor="middle" fill="${logoTextColor}" font-size="25">${logoText}</text>
  </svg>`
}

class CLI {
  constructor() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const { logoShape, logoTextColor, logoText, logoShapeColor } = answers;

        let newShape;
        switch (logoShape) {
          case 'circle':
            newShape = new Circle(logoShapeColor, logoText, logoTextColor);
            break;
          case 'triangle':
            newShape = new Triangle(logoShapeColor, logoText, logoTextColor);
            break;
          case 'square':
            newShape = new Square(logoShapeColor, logoText, logoTextColor);
            break;
          default:
            console.log('You are the weakest link. Goodbye.');
            return;
        }


        const svg = createLogo(newShape, logoTextColor, logoText, logoShapeColor);
        const filename = `${logoText}.${logoShape}.${logoShapeColor}.svg`;
        const filepath = `./examples/${logoText}.${logoShape}.${logoShapeColor}.svg`;

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

const cli = new CLI();
module.exports = CLI;
