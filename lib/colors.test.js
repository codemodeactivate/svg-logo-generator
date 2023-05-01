const { Color, isCSSColorName, validateColorInput } = require('./colors');

describe('Color class', () => {
  test('creates a new color object with name and hex properties', () => {
    const color = new Color('Red', '#FF0000');
    expect(color.name).toBe('Red');
    expect(color.hex).toBe('#FF0000');
  });
});

describe('isCSSColorName function', () => {
  test('returns true for valid CSS color names', () => {
    expect(isCSSColorName('Red')).toBe(true);
    expect(isCSSColorName('LimeGreen')).toBe(true);
  });

  test('returns false for invalid CSS color names', () => {
    expect(isCSSColorName('purplemountainsmajesty')).toBe(false);
    expect(isCSSColorName('#FF0000')).toBe(false);
  });
});

describe('validateColorInput function', () => {
  test('returns true for valid hexadecimal color input', () => {
    expect(validateColorInput('#FF0000')).toBe(true);
    expect(validateColorInput('#00FF00')).toBe(true);
    expect(validateColorInput('#0000FF')).toBe(true);
    expect(validateColorInput('#ABCDEF')).toBe(true);
    expect(validateColorInput('#abcdef')).toBe(true);
  });

  test('returns true for valid CSS color name input', () => {
    expect(validateColorInput('Red')).toBe(true);
    expect(validateColorInput('LimeGreen')).toBe(true);
  });

  test('returns false for invalid input', () => {
    expect(validateColorInput('purplemountainsmajesty')).toBe(false);
    expect(validateColorInput('#000')).toBe(true);
    expect(validateColorInput('#favoritecolor')).toBe(false);
    expect(validateColorInput('')).toBe(false);
  });
});
