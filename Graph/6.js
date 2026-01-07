// 542. 01 Matrix https://leetcode.com/problems/01-matrix/description/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let rlen = mat.length;
  let clen = mat[0].length;

  let max = rlen * clen;
  let queue = [];

  for (let i = 0; i < rlen; i++) {
    for (let j = 0; j < clen; j++) {
      if (mat[i][j] == 0) {
        queue.push({ row: i, col: j });
      } else {
        mat[i][j] = max;
      }
    }
  }

  while (queue.length) {
    const { row, col } = queue.shift();

    for (const [r, c] of [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ]) {
      const dr = r + row;
      const dc = c + col;

      if (
        dr < rlen &&
        dr >= 0 &&
        dc < clen &&
        dc >= 0 &&
        mat[dr][dc] > mat[row][col]
      ) {
        mat[dr][dc] = mat[row][col] + 1;
        queue.push({ row: dr, col: dc });
      }
    }
  }

  return mat;
};
