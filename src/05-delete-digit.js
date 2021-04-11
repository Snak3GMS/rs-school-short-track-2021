/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const initNumber = n.toString().split('');
  let resNumber = 0;
  for (let i = 0; i < n.toString().length; i++) {
    const removed = initNumber.splice(i, 1)[0];
    if (Number(initNumber.join('')) > resNumber) {
      resNumber = Number(initNumber.join(''));
    }
    initNumber.splice(i, 0, removed);
  }
  return resNumber;
}

module.exports = deleteDigit;
