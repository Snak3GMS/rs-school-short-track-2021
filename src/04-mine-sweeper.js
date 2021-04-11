/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mineFields = [...matrix];
  mineFields.forEach((elem, index) => {
    mineFields[index] = elem.map(() => 0);
    return true;
  });
  matrix.forEach((elem, i) => {
    elem.forEach((e, m) => {
      if (e) {
        if (mineFields[i][m - 1] !== undefined) { mineFields[i][m - 1] += 1; }
        if (mineFields[i - 1] !== undefined && mineFields[i - 1][m - 1] !== undefined) {
          mineFields[i - 1][m - 1] += 1;
        }
        if (mineFields[i - 1] !== undefined && mineFields[i - 1][m] !== undefined) {
          mineFields[i - 1][m] += 1;
        }
        if (mineFields[i - 1] !== undefined && mineFields[i - 1][m + 1] !== undefined) {
          mineFields[i - 1][m + 1] += 1;
        }
        if (mineFields[i][m + 1] !== undefined) { mineFields[i][m + 1] += 1; }
        if (mineFields[i + 1] !== undefined && mineFields[i + 1][m + 1] !== undefined) {
          mineFields[i + 1][m + 1] += 1;
        }
        if (mineFields[i + 1] !== undefined && mineFields[i + 1][m] !== undefined) {
          mineFields[i + 1][m] += 1;
        }
        if (mineFields[i + 1] !== undefined && mineFields[i + 1][m - 1] !== undefined) {
          mineFields[i + 1][m - 1] += 1;
        }
      }
    });
  });
  return mineFields;
}

module.exports = minesweeper;
