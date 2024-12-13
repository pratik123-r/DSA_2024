/**
 * Sum of Subarray Minimums
 * 
    Example 1:
    Input: arr = [3,1,2,4]
    Output: 17
    Explanation: 
    Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
    Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
    Sum is 17.

    Example 2:
    Input: arr = [11,81,94,43,3]
    Output: 444
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumSubarrayMins = function(arr) {
    const MOD = 1e9 + 7;
    let totalSum = 0
    let nse = findNse(arr)
    let pse = findPse(arr)
    for (let i = 0; i < arr.length; i++) {
        let leftSmaller = i - pse[i]
        let rightSmaller = nse[i] - i;
        totalSum = (totalSum + leftSmaller * rightSmaller * arr[i] % MOD) % MOD;
    }
    return totalSum
};


let findNse = (arr) => {
    let ans = new Array(arr.length).fill(arr.length);
    let stack = [];
    for (let i = arr.length-1; i>=0; i--) {

        while (stack.length && arr[stack[stack.length-1]] > arr[i]) {
            stack.pop()
        }
        ans[i] = stack.length ? stack[stack.length-1] : arr.length
        stack.push(i) 
    }
    return ans
}
let findPse = (arr) => {
    let ans = new Array(arr.length).fill(-1);
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length-1]] >= arr[i]) {
            stack.pop()
        }
        ans[i] = stack.length ? stack[stack.length-1] : -1
        stack.push(i) 
    }
    return ans
}

console.log(sumSubarrayMins([3,1,2,4]));