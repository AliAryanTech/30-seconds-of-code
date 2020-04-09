/**
 * Chunks an array into smaller arrays of a specified size.
 * @param {array} arr - The array to be chunked.
 * @param {number} size - The size of each chunk.
 */
export const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

/**
 * Returns all unique values of an array.
 * @param {array} arr - The array to be deduplicated.
 */
export const uniqueElements = arr => [...new Set(arr)];

/**
 * Returns an array of elements that appear in both arrays.
 * @param {array} arr - The array to compare for similiar elements.
 * @param {array} values - The values to compare against.
 */
export const similarity = (arr, values) => arr.filter(v => values.includes(v));