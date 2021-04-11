/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const newMatrix = matrix[0].map((elem, i) => matrix.map((x) => x[i]));
  newMatrix.forEach((a, i) => {
    if (a.indexOf(0) !== -1) {
      a.splice(a.indexOf(0));
    }
    newMatrix[i] = a.reduce((acc, ell) => acc + ell, 0);
  });
  return newMatrix.reduce((a, b) => a + b);
}

module.exports = getMatrixElementsSum;
