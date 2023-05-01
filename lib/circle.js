const Shape = require('./shape');

class Circle extends Shape {
  constructor(logoShapeColor, logoTextColor, logoText) {
    super(logoShapeColor, logoTextColor, logoText, 'circle');
    this.radius = 50;
    this.centerX = 50;
    this.centerY = 50;
  }
  render() {
    return `<circle cx="${this.centerX}" cy="${this.centerY}" r="${this.radius}" fill="${this.logoShapeColor}" stroke-width="1"/>`;
  }
}

module.exports = Circle;
