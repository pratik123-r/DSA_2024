/**
 * 55. Jump Game
 * 
    Example 1:
    Input: nums = [2,3,1,1,4]
    Output: true
    Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

    Example 2:
    Input: nums = [3,2,1,0,4]
    Output: false
    Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 */


var canJump = function (nums) {
    let maxindex = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + i > maxindex) {
            maxindex = nums[i] + i
        }
        if(i == maxindex) {
            count++
        }

    }
    return count
};

canJump([2,3,1,1,4])