const Triangle = require('./triangle.js');
const Square = require('./square.js');
const Circle = require('./circle.js');
const Shape = require('./shape.js');
const Color = require('./circle.js');


function createLogo(logoShape, logoTextColor, logoText) {
    if (logoText.length > 3 ) {
        throw new Error ('Logo text must be less than 3 characters');
    }
    return `<svg version="1.1" width="100" height="100"viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${logoShape.render()}<text x="40%" y="70%" fill="${logoTextColor}" font-size="100%">${logoText}</text></svg>`
}
module.exports = createLogo;
