// 130. Surrounded Regions https://leetcode.com/problems/surrounded-regions/description/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let rlen = board.length;
  let clen = board[0].length;
  let visited = Array.from({ length: rlen }).map(() =>
    new Array(clen).fill(false)
  );
  let queue = [];
  for (let i = 0; i < Math.max(rlen, clen); i++) {
    if (i < clen && board[0][i] == "O") queue.push({ row: 0, col: i });

    if (i < rlen && board[i][0] == "O") queue.push({ row: i, col: 0 });

    if (i < rlen && board[i][clen - 1] == "O")
      queue.push({ row: i, col: clen - 1 });

    if (i < clen && board[rlen - 1][i] == "O")
      queue.push({ row: rlen - 1, col: i });
  }

  while (queue.length) {
    const { row, col } = queue.shift();
    visited[row][col] = true;
    for (const [r, c] of [
      [1, 0],
      [0, 1],
      [0, -1],
      [-1, 0],
    ]) {
      const dr = row + r;
      const dc = col + c;
      if (
        dr >= 0 &&
        dc >= 0 &&
        dr < rlen &&
        dc < clen &&
        board[dr][dc] == "O" &&
        !visited[dr][dc]
      ) {
        queue.push({ row: dr, col: dc });
      }
    }
  }

  for (let i = 0; i < rlen; i++) {
    for (let j = 0; j < clen; j++) {
      if (board[i][j] == "O" && !visited[i][j]) {
        board[i][j] = "X";
      }
    }
  }
  return board;
};
