/**
    Problem Statement: Given a matrix if an element in the matrix is 0 then you will 
    have to set its entire column and row to 0 and then return the matrix.

    Examples 1:
    Input:
    matrix=[[1,1,1],[1,0,1],[1,1,1]]

    Output:
    [[1,0,1],[0,0,0],[1,0,1]]

    Explanation:
    Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.

    Input:
    matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

    Output:
    [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

    Explanation:
    Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0
 */

function setZero(arr) {
    let R = arr.length - 1;
    let C = arr[0].length - 1
    let h = Array(C+1).fill(0);
    let v = Array(R+1).fill(0);
    for (let i = 0; i <= R; i++) {
        for (let j = 0; j <= C; j++) {
            if(arr[i][j] === 0) {
                h[j] = 1;
                v[i] = 1;
            }
        } 
    }
    for (let i = 0; i <= R; i++) {
        for (let j = 0; j <= C; j++) {
            if(h[j] === 1 || v[i] === 1) {
                arr[i][j] = 0;
            }
        } 
    }
    return arr;
}

console.log(setZero([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));