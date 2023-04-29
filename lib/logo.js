const Triangle = require('./triangle.js');
const Square = require('./square.js');
const Circle = require('./circle.js');
const Shape = require('./shape.js');
const Color = require('./circle.js');


function createLogo(logoShape, logoTextColor, logoText, logoShapeColor) {
    if (logoText.length > 3 ) {
        throw new Error ('Logo text must be less than 3 characters');
    }
    return `<svg version="1.1" width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">${logoShape.render(logoShapeColor)}<text x="50%" y="60%" text-anchor="middle" fill="${logoTextColor}" font-size="50">${logoText}</text></svg>`
}

module.exports = createLogo;
