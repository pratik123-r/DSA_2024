/**
 * https://takeuforward.org/data-structure/grid-unique-paths-dp-on-grids-dp8/
 * https://leetcode.com/problems/unique-paths/description/
 */


function countWaysUtil(r, c, dp) {
    if (r == 0 && c == 0)
        return 1
    if (r < 0 || c < 0)
        return 0
    const dpKey = `${r}-${c}`
    if (dp[dpKey])
        return dp[dpKey]
    const up = countWaysUtil(r - 1, c, dp)
    const left = countWaysUtil(r, c - 1, dp)
    return dp[dpKey] = up + left
}

console.log(countWaysUtil(3, 3, {}));


