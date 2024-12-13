/**
 *  Next Greater Element Using Stack

    Problem Statement: Given a circular integer array A, return the next greater element for every element in A. 
    The next greater element for an element x is the first element greater than x that we come across while traversing the array in a clockwise manner. 
    If it doesn't exist, return -1 for this element.

    Example 1: 

    Input: N = 11, A[] = {3,10,4,2,1,2,6,1,7,2,9}
    Output: 10,-1,6,6,2,6,7,7,9,9,10
    Explanation: For the first element in A ,i.e, 3, the greater element which comes next to it while traversing and is closest to it is 10. Hence,10 is present on index 0 in the resultant array. Now for the second element,i.e, 10, there is no greater number and hence -1 is it’s next greater element (NGE). Similarly, we got the NGEs for all other elements present in A.  


    Example 2:

    Input:  N = 6, A[] = {5,7,1,7,6,0}
    Output: 7,-1,7,-1,7,5
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
   let n = nums.length;
   let ans = new Array(n).fill(-1);
   let stack = [];

   // Iterate over the array twice to handle the circular nature
   for (let i = 2 * n - 1; i >= 0; i--) {
       // Use modulo to wrap around the array
       let num = nums[i % n];

       // Maintain decreasing order in the stack, popping elements less than or equal to the current one
       while (stack.length && stack[stack.length - 1] <= num) {
           stack.pop();
       }

       // Only fill `ans[i % n]` if we're in the first pass (not past the end of the original array length)
       if (i < n) {
           ans[i] = stack.length ? stack[stack.length - 1] : -1;
       }

       // Push the current element to the stack
       stack.push(num);
   }

   return ans;
};

console.log(nextGreaterElements([3,10,4,2,1,2,6,1,7,2,9]));
console.log(nextGreaterElements([5,7,1,7,6,0]));
console.log(nextGreaterElements([5,4,3,2,1]));

