// 994. Rotting Oranges https://leetcode.com/problems/rotting-oranges/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let queue = [];
  let rowLen = grid.length;
  let colLen = grid[0].length;

  let visited = new Set();
  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      if (grid[r][c] === 2) {
        queue.push({ r, c, cost: 0 });
      }
    }
  }
  let ans = 0;

  while (queue.length) {
    let { r, c, cost } = queue.shift();

    visited.add(`${r}-${c}`);
    ans = Math.max(cost, ans);
    for (const [row, col] of [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ]) {
      const dr = row + r;
      const dc = col + c;

      if (
        dc >= 0 &&
        dc < colLen &&
        dr >= 0 &&
        dr < rowLen &&
        grid[dr][dc] == 1 &&
        !visited.has(`${dr}-${dc}`)
      ) {
        grid[dr][dc] = 2;
        queue.push({ r: dr, c: dc, cost: cost + 1 });
      }
    }
  }

  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      if (grid[r][c] === 1) {
        return -1;
      }
    }
  }

  return ans;
};
