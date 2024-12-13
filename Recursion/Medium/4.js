/**
 * Given an array arr of size n of non-negative integers and an integer sum, 
 * the task is to count all subsets of the given array with a sum equal to a given sum.
 * 
    Input: 
    n = 6, arr = [5, 2, 3, 10, 6, 8], sum = 10

    Output: 
    3

    Explanation: 
    {5, 2, 3}, {2, 8}, {10} are possible subsets.
 */


function util(currsum, sum, arr, index) {

    if (index === arr.length) 
        return sum === currsum ? 1 : 0;
    
    return util(currsum + arr[index], sum, arr, index + 1) + util(currsum, sum, arr, index + 1)
}


// https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/description/

console.log(util(0, 10, [5, 2, 3, 10, 6, 8], 0));