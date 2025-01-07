/**
70. Climbing Stairs https://leetcode.com/problems/climbing-stairs/description/
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 */

function climbStairs(n) {
    let dp = new Array(n + 1).fill(-1); // Initialize dp array with -1 to indicate uncomputed values

    function helper(steps) {
        if (steps <= 1) return 1; // Base cases
        if (dp[steps] !== -1) return dp[steps]; // Return cached result if already computed

        dp[steps] = helper(steps - 1) + helper(steps - 2); // Recursive computation
        return dp[steps];
    }

    return helper(n);
}
