const Shape = require('./shape');

class Triangle extends Shape {
    constructor(logoShapeColor, logoTextColor, logoText) {
        super(logoShapeColor, logoTextColor, logoText, 'triangle');
    }
    render() {
        return `<polygon points="50,0 0,100 100,100" fill="${this.logoShapeColor}" stroke-width="1"/>`
    }
}

module.exports = Triangle;
