/**
 * Generates a random string of specified length.
 * @param len Length of the generated string. Defaults to 22.
 */
export const randomString = (len = 22): string => {
  // Define character set
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-';
  // Maximum position is one less than the length of the character set
  const maxPos = alphabet.length;
  let str = '';
  for (let i = 0; i < len; i++) {
    // Generate a random number between 0 and 1 using Math.random(),
    // multiply it by the maximum position to get a random index within the character set range,
    // use charAt() function to get the corresponding character and append it to the string.
    str += alphabet.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
};
