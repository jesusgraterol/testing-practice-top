/* eslint-disable no-undef */
import capitalize from './assignment-01';

test('Capitalizes the first character of a given string', () => {
  expect(capitalize('javascript')).toBe('Javascript');
  expect(capitalize('theodinproject')).toBe('Theodinproject');
});
