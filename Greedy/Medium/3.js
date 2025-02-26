/**
 * 45. Jump Game II
 * 
    Example 1:
    Input: nums = [2,3,1,1,4]
    Output: 2
    Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

    Example 2:
    Input: nums = [2,3,0,1,4]
    Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
    const n = nums.length;
    let jumps = 0, currentEnd = 0, farthest = 0;

    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }
    return jumps;
}

// Example usage:
const nums = [2, 3, 1, 1, 4];
console.log(jump(nums)); // Output: 2


{

    var jump = function(nums) {
        let dp = new Array(nums.length).fill(-1)
        return solve(0, nums, dp)
    };
    
    var solve = function (currentInd, nums, dp) {
        if(currentInd >= nums.length - 1)
                return 0
        
    
       if (dp[currentInd] !== -1) return dp[currentInd];
    let ans = nums.length;
        for(let i = currentInd+1 ; i <= nums[currentInd] + currentInd ; i++) {
            let jump = 1 + solve(i , nums, dp)
            ans = Math.min(ans, jump)
        }
        return dp[currentInd] = ans;
    }
}
