/**
1004. Max Consecutive Ones III

Given a binary array nums and an integer k, return the maximum number of 
consecutive 1's in the array if you can flip at most k 0's.

Example 1:
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/

function consecutiveOnes(arr, k){
    let map = new Map();
    let start = 0;
    let ans = 0
    for (let end = 0; end < arr.length; end++) {
        if(arr[end] == 0)
            map.set(end, 0)
        if(map.size > k) {
            firstkey = map.keys().next().value
            start = firstkey + 1
            map.delete(firstkey)
        }
        ans = Math.max(ans, end - start + 1);
    }
    return ans
}

console.log(consecutiveOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));
