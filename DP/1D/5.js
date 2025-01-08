class Solution {
    rob(arr) {
        if (arr.length === 1) return arr[0];

        let dp = new Array(arr.length).fill(-1);
        const i = this.maxSum(arr, dp, 1, arr.length - 1);

        dp.fill(-1); // Reset dp array for the second case
        const j = this.maxSum(arr, dp, 0, arr.length - 2);

        return Math.max(i, j);
    }

    maxSum(arr, dp, s, e) {
        if (s === e) {
            return arr[e];
        }
        if (s > e) {
            return 0;
        }

        if (dp[s] !== -1) {
            return dp[s];
        }

        const pick = arr[s] + this.maxSum(arr, dp, s + 2, e);
        const nonPick = this.maxSum(arr, dp, s + 1, e);

        return dp[s] = Math.max(nonPick, pick);
    }
}

// Example usage:
const solution = new Solution();
const nums = [2, 3, 2];
console.log(solution.rob(nums)); // Output: 3