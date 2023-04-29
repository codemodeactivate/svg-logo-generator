const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./questions')
const shapes = require('./shape')
const path = require('path')
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');
const Logo = require('./logo');
class CLI {
    constructor() {
        inquirer
            .prompt(questions)
            .then((answers) => {
                const { shape, shapeColor, textColor, logoCharacters } = answers;
                const filepath = './examples/logo.svg';
                let newShape;
                switch (shape) {
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


                const svg = `<svg>${newShape.render()}</svg>`;
                const filename =`${logoCharacters}.${shape}.${shapeColor}.svg`;
                //const filepath = path.join(__dirname, '..', 'examples', filename);
                fs.writeFile(filepath, svg, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(`Generated ${filename}`);
                })

            });

    }
}
const cli = new CLI();






module.exports = CLI;
