/* eslint-disable no-undef */
import calculator from './assignment-03';

test('Can perform an addition on 2 numbers.', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(150, 600)).toBe(750);
});

test('Can perform a subtraction on 2 numbers.', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(150, 600)).toBe(-450);
  expect(calculator.subtract(800, 799)).toBe(1);
});

test('Can perform a division on 2 numbers.', () => {
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.divide(100, 50)).toBe(2);
  expect(calculator.divide(99, 3)).toBe(33);
});

test('Can perform a multiplication on 2 numbers.', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(8, 5)).toBe(40);
  expect(calculator.multiply(9, 9)).toBe(81);
});
