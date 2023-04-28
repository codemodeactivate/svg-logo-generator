const Triangle = require('./triangle.js');
const Square = require('./square.js');
const Circle = require('./circle.js');
const Shape = require('./shape.js');
const Color = require('./circle.js');


const createLogo = (inputs) => {
    const logoShape = inputs.shape;
    switch (logoShape) {
        case 'circle':
            return new Circle(inputs.shapeColor, inputs.textColor, inputs.text);
            break;
        case 'triangle':
            return new Triangle(inputs.shapeColor, inputs.textColor, inputs.text);
            break;
        case 'square':
            return new Square(inputs.shapeColor, inputs.textColor, inputs.text);
            break;

        default:
            return `You are the weakest link. Goodbye.`;
            break;
    }

}
module.exports = createLogo;

