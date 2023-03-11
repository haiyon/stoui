// source: https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge

/**
 * Checks if a given value is an object (not an array or null).
 * @param item The value to check.
 * @returns `true` if the value is an object, `false` otherwise.
 */
export function isObject(item: unknown) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Performs a deep merge of one or more source objects into a target object.
 * @param target The target object to merge into.
 * @param sources One or more source objects to merge from.
 * @returns A new object that contains all merged properties.
 * @example
 *
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { b: { d: 3 } };
 * const merged = mergeDeep(obj1, obj2);
 * console.log(merged); // Output: { a: 1, b: { c: 2, d: 3 } }
 */
export function mergeDeep(
  target: Record<string, unknown>,
  ...sources: Record<string, unknown>[]
): Record<string, unknown> {
  // If there are no more source objects to merge, return the original target object.
  if (!sources.length) return target;

  // Remove the first source object from the array and merge it into the target object.
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        // If the value of the key is also an object, recursively call mergeDeep with the nested objects as the new target and source.
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key] as Record<string, unknown>, source[key] as Record<string, unknown>);
      } else {
        // Otherwise, assign the value of the key directly to the target object using Object.assign.
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  // Recursively call mergeDeep with the updated target object and remaining source objects.
  return mergeDeep(target, ...sources);
}
