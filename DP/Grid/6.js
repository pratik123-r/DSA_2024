/**
 * Minimum/Maximum Falling Path Sum
 */

var minFallingPathSum = function (grid) {
    let ans = Infinity;
    for (let col = 0; col < grid[0].length; col++) {
        ans = Math.min(ans, sol(grid.length - 1, col, new Map(), grid))
    }
    return ans
};

var sol = (r, c, dp, grid) => {
    if (c < 0 || c > grid[0].length - 1)
        return Infinity
    if (r == 0)
        return grid[r][c]
    if (r < 0 || c < 0)
        return Infinity
    const dpKey = `${r}-${c}`
    if (dp.has(dpKey))
        return dp.get(dpKey)

    const up = grid[r][c] + sol(r - 1, c, dp, grid)
    const left = grid[r][c] + sol(r - 1, c - 1, dp, grid)
    const right = grid[r][c] + sol(r - 1, c + 1, dp, grid)

    dp.set(dpKey, Math.min(up, left, up, right))
    return Math.min(up, left, up, right)
}



console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]));
