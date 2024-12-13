/*
    Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
    has the largest sum and returns its sum and prints the subarray.

    Example 1:
    Input:
    arr = [-2,1,-3,4,-1,2,1,-5,4] 

    Output:
    6 

    Explanation:
    [4,-1,2,1] has the largest sum = 6. 

    Examples 2:
    Input:
    arr = [1] 

    Output:
    1 

    Explanation:
    Array has only one element and which is giving positive sum of 1. 
 */

//Kadane's Algorithm

function maxSum(arr) {
    let maxSum = arr[0]
    let sum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        sum+=arr[i]
        sum = Math.max(arr[i], sum)
        maxSum = Math.max(maxSum, sum)
    }
    return Math.max(sum, maxSum)
}

console.log(maxSum([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSum([-1]));
