/* **********************
 * Assignment Solution  *
 ********************** */

// The english alphabet
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

/**
 * Ciphers a given letter based on the shift factor and returns it.
 * @param {*} letter
 * @param {*} shiftFactor
 * @returns string
 */
function cipherLetter(letter, shiftFactor) {
  // calculate the letter's index
  const letterIndex = ALPHABET.indexOf(letter);

  // if the shift factor pushes the letter after the end of the alphabet, wrap it by circling it
  let cipheredLetter;
  if (letter === ' ') {
    cipheredLetter = letter;
  } else if ((letterIndex + shiftFactor) >= ALPHABET.length) {
    cipheredLetter = ALPHABET[(letterIndex + shiftFactor) - ALPHABET.length];
  } else {
    cipheredLetter = ALPHABET[letterIndex + shiftFactor];
  }
  return cipheredLetter;
}

/**
 * A caesarCipher function that takes a string and a shift factor and returns it with each character
 * “shifted”.
 * @param value
 * @param shiftFactor
 * @returns string
 */
function caesarCipher(value, shiftFactor) {
  return value.split('').map((letter) => cipherLetter(letter, shiftFactor)).join('');
}

/* *****************
 * Module Exports  *
 ***************** */
export default caesarCipher;
export { cipherLetter };
