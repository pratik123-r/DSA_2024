// https://leetcode.com/problems/shortest-path-in-binary-matrix/description/


function slove(grid) {
  let n = grid.length;
  let m = grid[0].length;
  const cost = Array.from({ length: n }, () => Array(m).fill(Infinity));

  let queue = [];
  if(!grid[0][0]) {
        queue.push([0,0,0])
        cost[0][0] = 0
  }
        

  while (queue.length) {
    const [row, col, nodeCost] = queue.shift();
    if (row == n - 1 && col == m - 1) return nodeCost+1;


    for (const [r,c] of [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
      [1, 1],
      [-1, -1],
      [-1, 1],
      [1, -1],
    ]) {

        const dr = r + row
        const dc = c + col
        if(dr < n && dc < m && dr>=0 && dc>= 0 &&  nodeCost+1 < cost[dr][dc] && grid[dr][dc]==0) {

            cost[dr][dc] = nodeCost+1
            queue.push([dr,dc, nodeCost+1])
        }
    }
    
    

  }

  return -1;
}

slove([
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
]);
