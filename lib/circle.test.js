const Circle = require('./circle');

describe('Circle', () => {
  let circle;

  beforeEach(() => {
    circle = new Circle('red', 'white', 'My Logo');
  });

  test('it should create a circle with default values', () => {
    expect(circle.logoShapeColor).toEqual('red');
    expect(circle.logoTextColor).toEqual('white');
    expect(circle.logoText).toEqual('My Logo');
    expect(circle.radius).toEqual(50);
    expect(circle.centerX).toEqual(50);
    expect(circle.centerY).toEqual(50);
  });

  test('it should render a circle with correct attributes', () => {
    const expected = '<circle cx="50" cy="50" r="50" fill="red" stroke-width="1"/>';
    expect(circle.render()).toEqual(expected);
  });
});
