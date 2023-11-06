/* eslint-disable no-undef */
import caesarCipher, { cipherLetter } from './assignment-04';

test('Encrypts a letter and can take any shift factor', () => {
  expect(cipherLetter('a', 0)).toBe('a');
  expect(cipherLetter('a', 1)).toBe('b');
  expect(cipherLetter('a', 2)).toBe('c');
  expect(cipherLetter('a', 10)).toBe('k');
  expect(cipherLetter('z', 1)).toBe('a');
  expect(cipherLetter('z', 2)).toBe('b');
  expect(cipherLetter('z', 3)).toBe('c');
  expect(cipherLetter('w', 12)).toBe('i');
});

test('Encrypts a given string based on the caesar cipher', () => {
  expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
  expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});
