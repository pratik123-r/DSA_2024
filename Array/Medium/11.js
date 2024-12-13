/*
    Problem Statement: Given a Matrix, print the given matrix in spiral order.

    Example 1:
    Input: Matrix[][] = { { 1, 2, 3, 4 },
                { 5, 6, 7, 8 },
                { 9, 10, 11, 12 },
                    { 13, 14, 15, 16 } }

    Outhput: 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.
    Explanation: The output of matrix in spiral form.

    Example 2:
    Input: Matrix[][] = { { 1, 2, 3 },
                    { 4, 5, 6 },
                { 7, 8, 9 } }
                    
    Output: 1, 2, 3, 6, 9, 8, 7, 4, 5.
    Explanation: The output of matrix in spiral form.
 */


function spiralOrder(matrix) {
    let result = [];

    if (matrix.length === 0) return result;

    let top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right across the top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse from top to bottom down the right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Traverse from right to left across the bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Traverse from bottom to top up the left column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}

    

let ans =     
spiralOrder([[1, 2, 3],
[4, 5, 6],
[7, 8, 9]])
console.log(ans);


