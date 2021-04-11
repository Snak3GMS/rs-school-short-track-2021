/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let found = false;
  let position = -1;
  let first = 0;
  let last = array.length - 1;
  let avg = 0;

  while (found === false) {
    avg = Math.floor((first + last) / 2);
    if (array[avg] === value) {
      found = true;
      position = avg;
    } else if (array[avg] > value) {
      last = avg - 1;
    } else {
      first = avg + 1;
    }
  }
  return position;
}

module.exports = findIndex;
