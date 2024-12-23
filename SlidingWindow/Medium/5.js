/**
 * Count Number of Nice Subarrays
 *
Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Example 1:
Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

Example 2:
Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There are no odd numbers in the array.

Example 3:
Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16

*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(arr, k) {
    let map = new Map()
    let prefix = 0
    let ans = 0;
    map.set(0, 1)
    for (let i = 0; i < arr.length; i++) {
        prefix += arr[i] % 2 == 0 ? 0 : 1
        if(map.get(prefix - k)) {
            ans += map.get(prefix - k)
        }
        map.set(prefix, (map.get(prefix) || 0) + 1)
    }

    return ans
};

console.log(numberOfSubarrays([1,1,2,1,1], 3));
