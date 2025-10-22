/*
 *  Problem Statement: Given an array containing both positive and negative integers, 
    we have to find the length of the longest subarray with the sum of all elements equal to zero. 

    Example 1:
    Input Format
    : N = 6, array[] = {9, -3, 3, -1, 6, -5}
    Result
    : 5
    Explanation
    : The following subarrays sum to zero:
    {-3, 3} , {-1, 6, -5}, {-3, 3, -1, 6, -5}
    Since we require the length of the longest subarray, our answer is 5!

    Example 2:
    Input Format:
    N = 8, array[] = {6, -2, 2, -8, 1, 7, 4, -10}
    Result
    : 8
    Subarrays with sum 0 : {-2, 2}, {-8, 1, 7}, {-2, 2, -8, 1, 7}, {6, -2, 2, -8, 1, 7, 4, -10}
    Length of longest subarray = 8

    Example 3:
    Input Format:
    N = 3, array[] = {1, 0, -5}
    Result
    : 1
    Subarray : {0}
    Length of longest subarray = 1

    Example 4:
    Input Format:
    N = 5, array[] = {1, 3, -5, 6, -2}
    Result
    : 0
    Subarray: There is no subarray that sums to zero

 */

function longestSum(arr) {
    let map = new Map()
    let ans = 0
    let prefix = 0
    map.set(0, -1)
    for (let i = 0; i < arr.length; i++) {
        prefix += arr[i]
        if(map.has(prefix)) {
            ans = Math.max(i - map.get(prefix))
        }
        if(!map.has(prefix))
            map.set(prefix, i)
    }
    return ans
}
console.log(longestSum([6, -2, 2, -8, 1, 7, 4, -10]));