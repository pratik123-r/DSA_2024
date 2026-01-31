/*

    Problem Statement: Given an array that contains both negative and positive integers, find the maximum product subarray.

    Example 1:
    Input:

    Nums = [1,2,3,4,5,0]
    Output:

    120
    Explanation:

    In the given array, we can see 1×2×3×4×5 gives maximum product value.


    Example 2:
    Input:
    Nums = [1,2,-3,0,-4,-5]
    Output:

    20
    Explanation:

    In the given array, we can see (-4)×(-5) gives maximum product value.

 */

// This function returns the maximum product subarray
// using prefix and suffix traversal
class Solution {
    maxProductSubArray(arr) {
        // Get the length of array
        const n = arr.length;

        // Initialize prefix and suffix products
        let pre = 1, suff = 1;

        // Initialize answer as negative infinity
        let ans = -Infinity;

        // Traverse from both directions
        for (let i = 0; i < n; i++) {
            // Reset prefix if zero
            if (pre === 0) pre = 1;

            // Reset suffix if zero
            if (suff === 0) suff = 1;

            // Multiply prefix with front element
            pre *= arr[i];

            // Multiply suffix with back element
            suff *= arr[n - i - 1];

            // Update the maximum product so far
            ans = Math.max(ans, pre, suff);
        }

        // Return final result
        return ans;
    }
}

// Sample usage
const arr = [2, 3, -2, 4];
const sol = new Solution();
console.log(sol.maxProductSubArray(arr));
