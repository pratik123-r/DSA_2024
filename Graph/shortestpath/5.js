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

function minPathCost(grid) {
    const n = grid.length;
    const m = grid[0].length;

    if (grid[0][0] === 0 || grid[n-1][m-1] === 0) return -1; // start or end blocked

    let minCost = Infinity;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    const directions = [
        [1,0],[0,1],[-1,0],[0,-1],
        [1,1],[1,-1],[-1,1],[-1,-1]
    ];

    function dfs(r, c, costSoFar) {
        // Prune paths that already exceed minCost
        if (costSoFar >= minCost) return;

        // Reached destination
        if (r === n-1 && c === m-1) {
            minCost = Math.min(minCost, costSoFar + grid[r][c]);
            return;
        }

        visited[r][c] = true;

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 && nr < n &&
                nc >= 0 && nc < m &&
                !visited[nr][nc] &&
                grid[nr][nc] !== 0
            ) {
                dfs(nr, nc, costSoFar + grid[r][c]);
            }
        }

        visited[r][c] = false; // backtrack
    }

    dfs(0, 0, 0);

    return minCost === Infinity ? -1 : minCost;
}

// Example usage:
const grid = [
    [1, 2, 3],
    [4, 0, 5],
    [6, 7, 8]
];

console.log(minPathCost(grid)); // Output: minimum path cost

