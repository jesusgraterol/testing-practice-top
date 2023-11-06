/* **********************
 * Assignment Solution  *
 ********************** */

/**
 * A reverseString function that takes a string and returns it reversed.
 * @param value
 * @returns string
 */
function reverseString(value) {
  return value.split("").reverse().join("");
}

/* *****************
 * Module Exports  *
 ***************** */
export default reverseString;
