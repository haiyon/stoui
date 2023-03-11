/* eslint-disable */
export const firstUpperCase = ([first, ...rest]) => {
  if (typeof first !== 'string') return '';
  return first.toUpperCase() + rest.join('');
};
