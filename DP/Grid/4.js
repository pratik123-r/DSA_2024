/**
 * https://takeuforward.org/data-structure/minimum-path-sum-in-a-grid-dp-10/
 * https://leetcode.com/problems/minimum-path-sum/description/
 */

var minPathSum = (r, c, dp, grid) => {
    if (r == 0 && c == 0)
        return grid[r][c]
    if (r < 0 || c < 0)
        return Infinity
    const dpKey = `${r}-${c}`
    if (dp[dpKey])
        return dp[dpKey]

    const up = grid[r][c] + minPathSum(r - 1, c, dp, grid)
    const left = grid[r][c] + minPathSum(r, c - 1, dp, grid)

    return dp[dpKey] = Math.min(up , left)
}

let grid = [[1,3,1],[1,5,1],[4,2,1]]
console.log(minPathSum(grid.length - 1, grid[0].length - 1, {}, grid));
