/**
 * https://takeuforward.org/data-structure/minimum-path-sum-in-triangular-grid-dp-11/
 * https://leetcode.com/problems/triangle/description/
 */

var minimumTriangle = (r, c, dp, grid) => {
    if (r === grid.length)
        return 0

    const dpKey = `${r}-${c}`
    if (dpKey in dp) return dp[dpKey];

    const down = grid[r][c] + minimumTriangle(r + 1, c, dp, grid)
    const cross = grid[r][c] + minimumTriangle(r + 1, c + 1, dp, grid)

    return dp[dpKey] = Math.min(down, cross)
}

let grid = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
console.log(minimumTriangle(0, 0, {}, grid));