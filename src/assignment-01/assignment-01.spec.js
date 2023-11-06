import capitalize from './assignment-01';

test('Capitalizes the first character of the word "javascript"', () => {
  expect(capitalize('javascript')).toBe('Javascript');
});
