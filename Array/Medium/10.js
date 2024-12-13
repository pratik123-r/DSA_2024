/*
    Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

    Input:
    [[1,2,3],[4,5,6],[7,8,9]]

    Output
    : [[7,4,1],[8,5,2],[9,6,3]]

    Explanation:
    Rotate the matrix simply by 90 degree clockwise and return the matrix.

    Example 2:
    Input:
    [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

    Output:
    [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

    Explanation:
    Rotate the matrix simply by 90 degree clockwise and return the matrix
 */


function rotate(arr) {
    let R = arr.length;
    let C = arr[0].length;

    for (let i = 0; i < Math.floor(R/2); i++) {
        for (let j = 0; j < C; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[R-i-1][j]
            arr[R-i-1][j] = temp;
        }
    }
    for (let i = 0; i < R; i++) {
        for (let j = i; j < C; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[j][i] 
            arr[j][i] = temp;
        }
    }
    return arr;
}
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));