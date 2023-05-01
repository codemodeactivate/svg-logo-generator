const Triangle = require('./triangle');

describe('Triangle', () => {
  test('renders a triangle with correct dimensions and color', () => {
    const triangle = new Triangle('blue', 'white', 'T');
    const rendered = triangle.render();
    expect(rendered).toContain('<polygon');
    expect(rendered).toContain('points="50,0 0,100 100,100"');
    expect(rendered).toContain('fill="blue"');
  });
});
