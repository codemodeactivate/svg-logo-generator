const Shape = require('./shape');

class Square extends Shape {
    constructor(logoShapeColor, logoTextColor, logoText) {
        super(logoShapeColor, logoTextColor, logoText, 'square');

    }
    render() {
        return `<rect width="100" height="100" fill="${this.logoShapeColor}" stroke-width="1"/>`
    }
}

module.exports = Square;
