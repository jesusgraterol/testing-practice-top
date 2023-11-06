/* eslint-disable no-undef */
import analyzeArray from './assignment-05';

test('Analyzes a given array and provides all its metadata', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
