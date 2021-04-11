/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const resArr = [];
  for (let i = 0; i < str.length; i++) {
    let counter = 1;
    while (str[i + 1] === str[i]) {
      counter++;
      i++;
    }
    if (counter > 1) {
      resArr.push(counter, str[i]);
    }
    if (counter === 1) {
      resArr.push(str[i]);
    }
  }
  return resArr.join('');
}

module.exports = encodeLine;
