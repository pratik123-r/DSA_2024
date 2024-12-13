/**
 * Problem Statement: Given an array of non-negative integers representation elevation of ground. 
 * Your task is to find the water that can be trapped after rain.
 * 


    Input:  [4,2,0,3,2,5]

    Output:9
 */

const trappedRain = (arr) => {
    let min = new Array(arr.length)
    let max = new Array(arr.length)
    let temp = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        temp = Math.max(temp, arr[i])
        min[i] = temp
    }
    temp = Number.MIN_SAFE_INTEGER;
    for (let i = arr.length - 1; i >= 0; i--) {
        temp = Math.max(temp, arr[i])
        max[i] = temp
    }
    let ans = 0
    for (let i = 1; i < arr.length - 1; i++) {
        let x = Math.min(max[i], min[i]) - arr[i];
        if (x > 0) {
            ans += x;
        }
    }
    return ans
}
console.log(trappedRain([4, 2, 0, 3, 2, 5]));
