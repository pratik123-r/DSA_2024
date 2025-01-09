/**
 * https://leetcode.com/problems/unique-paths-ii/description/
 */

var uniquePathsWithObstacles = (r, c, dp, grid) => {
    if (r == 0 && c == 0)
        return 1
    if (r < 0 || c < 0 || grid[r][c])
        return 0
    const dpKey = `${r}-${c}`
    if (dp[dpKey])
        return dp[dpKey]
    const up = uniquePathsWithObstacles(r - 1, c, dp, grid)
    const left = uniquePathsWithObstacles(r, c - 1, dp, grid)
    return dp[dpKey] = up + left

}

let grid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]

uniquePathsWithObstacles(grid.length - 1, grid[0].length - 1, {}, grid)