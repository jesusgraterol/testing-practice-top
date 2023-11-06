/* **********************
 * Assignment Solution  *
 ********************** */

/**
 * A capitalize function that takes a string and returns it with the first character capitalized.
 * @param value
 * @returns string
 */
function capitalize(value) {
  return `${value[0].toUpperCase()}${value.slice(1)}`;
}

/* *****************
 * Module Exports  *
 ***************** */
export default capitalize;
