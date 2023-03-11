/**
 * Checks if the `window` object is defined, indicating whether or not the code is being run in a browser environment.
 * @returns A boolean value indicating whether or not the `window` object is defined.
 */
export default (): boolean => typeof window !== 'undefined';
