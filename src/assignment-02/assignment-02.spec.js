import reverseString from './assignment-02';

test('Reverses a given word.', () => {
  expect(reverseString('javascript')).toBe('tpircsavaj');
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('Pumpkin')).toBe('nikpmuP');
});
