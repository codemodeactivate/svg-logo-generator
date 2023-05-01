const Shape = require('./shape');

describe('Shape', () => {
  test('creates a shape with correct properties', () => {
    const shape = new Shape('red', 'white', 'My Logo', 'circle');

    expect(shape.logoShape).toBe('circle');
    expect(shape.logoShapeColor).toBe('red');
    expect(shape.logoText).toBe('My Logo');
    expect(shape.logoTextColor).toBe('white');
  });
});
