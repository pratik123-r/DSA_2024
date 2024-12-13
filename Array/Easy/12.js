/*
  Problem Statement: Given an array and a sum k, 
                    we need to print the length of the longest subarray that sums to k.

    Example 1:
    Input Format: N = 3, k = 5, array[] = {2,3,5}
    Result: 2
    Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

    Example 2:
    Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
    Result: 3
    Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.
 */

function longestSum(arr, sum) {
    let map = new Map()
    let total = 0;
    let maxSum = -1;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
        if(total === sum) {
            maxSum = Math.max(maxSum, i+1)
        }
        if (!map.has(total)) { // for nagative numbers
            map.set(total, i);
        }
        if(map.has(total - sum)) {
            maxSum = Math.max(i - map.get(total - sum), maxSum)
        }
    }
    return maxSum;
}
// 1, 2, 1, 3, 5, 1, 9
// 1, 3 , 4, 7, 12
console.log(longestSum([1, 2, 1, 3, 5, 1, 9], 10)); // Output: 4 (subarray [1, 3, 5, 1])

console.log(longestSum([2,1,1,3,5,1,9], 10)); // Output: 4 (subarray [1,1,3,5])
// 2, 3, 4, 7, 12, 13, 22 -> prefix sum
// 0, 1, 2, 3,  4,  5,  6

console.log(longestSum([1, -1, 5, -2, 3], 3));  // Output: 4 (subarray [1, -1, 5, -2])
console.log(longestSum([-2, -1, 2, 1], 1));  // Output: 2 (subarray [-1, 2])

