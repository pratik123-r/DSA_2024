/*
    Problem Statement: Given an array of integers and an integer k, 
    return the total number of subarrays whose sum equals k.

    Example 1:
    Input Format:
    N = 6, array[] = {3, 1, 2, 3, 1, 5}, k = 6
    Result:
    4
    Explanation:
    The subarrays that sum up to 6 are [3, 1, 2] and [1 ,2, 3] [2, 3, 1] and [1, 5].

    Example 2:
    Input Format:
    N = 3, array[] = {1,2,3}, k = 3
    Result:
    2
    Explanation:
    The subarrays that sum up to 3 are [1, 2], and [3].

 */

var subarraySum = function (arr, sum) {
    let prefixSumMap = new Map();
    let prefixSum = 0;
    let count = 0;

    // Initialize the map with a prefix sum of 0 that has occurred once
    prefixSumMap.set(0, 1);

    for (let i = 0; i < arr.length; i++) {


        prefixSum += arr[i];

        // If (prefixSum - sum) exists in the map, add the frequency to count
        if (prefixSumMap.has(prefixSum - sum)) {
            count += prefixSumMap.get(prefixSum - sum);
        }

        // Add the current prefix sum to the map or update its count
        prefixSumMap.set(prefixSum, (prefixSumMap.get(prefixSum) || 0) + 1);
        
    }
    return count;
};

// 1 2 3 -3 1 1 1 
// 1 3 6  3 4 5 6 





// console.log(subarraySum([1, -1, 0], 0)); // 1 0 0  
// console.log(subarraySum([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3)); // 1 3 6 3 4 5 6 10 12 9 
console.log(subarraySum([3,-3,0,3], 3)); // 1 3 6 3 4 5 6 10 12 9 
// console.log(subarraySum([3, 1, 2, 3, 1, 5], 6)); // 3 4 6 9 10 15 
// console.log(subarraySum([1, 2, 3], 3)); // 1 3 3




