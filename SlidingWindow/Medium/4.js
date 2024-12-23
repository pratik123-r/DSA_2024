/**
 * 930. Binary Subarrays With Sum
 * 
    Example 1:

    Input: nums = [1,0,1,0,1], goal = 2
    Output: 4
    Explanation: The 4 subarrays are bolded and underlined below:
    [1,0,1,0,1]
    [1,0,1,0,1]
    [1,0,1,0,1]
    [1,0,1,0,1]


    Example 2:

    Input: nums = [0,0,0,0,0], goal = 0
    Output: 15

 */

/**
 * @param {number[]} arr
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(arr, goal) {
    let map = new Map()
    let prefix = 0
    let ans = 0;
    map.set(0, 1)
    for (let i = 0; i < arr.length; i++) {
        prefix += arr[i]
        if(map.get(prefix - goal)) {
            ans += map.get(prefix - goal)
        }
        map.set(prefix, (map.get(prefix) || 0) + 1)
    }

    return ans
};


console.log(numSubarraysWithSum([1,0,1,0,1], 2));
console.log(numSubarraysWithSum([0,0,0,0,0], 0));

