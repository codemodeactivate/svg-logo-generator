const Shape = require('./shape');

class Circle extends Shape {
    constructor(logoShapeColor, logoTextColor, logoText) {
        super('circle', logoShapeColor, logoTextColor, logoText);
    }
    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.logoShapeColor}" stroke-width="1"/>`
    }
}

module.exports = Circle;
