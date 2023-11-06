/* **********************
 * Assignment Solution  *
 ********************** */

/**
 * An analyzeArray function that takes an array of numbers and returns an object with the following
 * properties: average, min, max, and length.
 * @param arr
 * @returns object
 */
function analyzeArray(arr) {
  // init values
  let min;
  let max;
  let sum = 0;

  // iterate over each item and populate the values
  arr.forEach((val) => {
    if (typeof min !== 'number' || val < min) { min = val; }
    if (typeof max !== 'number' || val > max) { max = val; }
    sum += val;
  });

  // finally, return the analysis
  return {
    average: sum / arr.length,
    min,
    max,
    length: arr.length,
  };
}

/* *****************
 * Module Exports  *
 ***************** */
export default analyzeArray;
