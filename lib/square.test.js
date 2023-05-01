const Square = require('./square');

describe('Square', () => {
  test('renders a square with correct dimensions and color', () => {
    const square = new Square('red', 'white', 'S');
    const rendered = square.render();
    expect(rendered).toContain('<rect');
    expect(rendered).toContain('width="100"');
    expect(rendered).toContain('height="100"');
    expect(rendered).toContain('fill="red"');
  });
});
