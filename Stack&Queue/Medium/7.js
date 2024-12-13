/**
 * Problem Statement: Given an array of integers heights representing the histogram's bar height 
 * where the width of each bar is 1  return the area of the largest rectangle in histogram.

    Input: N =6, heights[] = {2,1,5,6,2,3}
    Output: 10
 */

const nse = (arr) =>{
    let ans = new Array(arr.length).fill(arr.length)
    let stack = []
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length-1]] >= arr[i]) {
            stack.pop()
        }
        if(stack.length)
            ans[i] = stack[stack.length-1]
        stack.push(i)
    }
    return ans;
}
const pse = (arr) =>{
    let ans = new Array(arr.length).fill(-1)
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length-1]] >= arr[i]) {
            stack.pop()
        }
        if(stack.length)
            ans[i] = stack[stack.length-1]
        stack.push(i)
    }
    return ans;
}

const largestRectangleArea = (arr) => {
    const nsi = nse(arr)
    const psi = pse(arr)
    let ans = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        let area = arr[i] * (nsi[i] - psi[i] -1)
        ans = Math.max(ans,area)
    }
    return ans;
}

console.log(largestRectangleArea([0]))
