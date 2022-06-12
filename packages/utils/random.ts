export const randomString = (len = 22): string => {
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-';
  const maxPos = alphabet.length;
  let str = '';
  for (let i = 0; i < len; i++) {
    str += alphabet.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
};
