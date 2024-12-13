/**
 * https://leetcode.com/problems/maximal-rectangle/
 * 
 * 85. Maximal Rectangle
 */


 var maximalRectangle = function(matrix) {
    let r = matrix.length;
    let c = matrix[0].length
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            matrix[i][j] = Number(matrix[i][j])
        }
    }
    let ans = largestRectangleArea(matrix[0]);

    for (let i = 1; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if(matrix[i][j])
                matrix[i][j] = matrix[i][j] + matrix[i - 1][j]
        }
        ans = Math.max(ans, largestRectangleArea(matrix[i]))
    }
    return ans;
};

const nse = (arr) => {
    let ans = new Array(arr.length).fill(arr.length)
    let stack = []
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop()
        }
        if (stack.length)
            ans[i] = stack[stack.length - 1]
        stack.push(i)
    }
    return ans;
}
const pse = (arr) => {
    let ans = new Array(arr.length).fill(-1)
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop()
        }
        if (stack.length)
            ans[i] = stack[stack.length - 1]
        stack.push(i)
    }
    return ans;
}

const largestRectangleArea = (arr) => {
    const nsi = nse(arr)
    const psi = pse(arr)
    let ans = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        let area = arr[i] * (nsi[i] - psi[i] - 1)
        ans = Math.max(ans, area)
    }
    return ans;
}


console.log(maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]));