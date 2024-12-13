/**
    Problem Statement: You are given an array of integers, your task is to move all the 
    zeros in the array to the end of the array and move non-negative 
    integers to the front by maintaining their order.

    Example 1:
    Input:
    1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
    Output:
    1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
    Explanation:
    All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

    Example 2:
    Input:
    1,2,0,1,0,4,0
    Output:
    1,2,1,4,0,0,0
    Explanation:
    All the zeros are moved to the end and non-negative integers are moved to front by maintaining order
 */

function moveZeroes(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[j] != 0 && arr[i] == 0) {
            j = i;
        }
        if (arr[i] != 0 && arr[j] === 0) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            j++;
        }
    }
}
let arr = [1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]
moveZeroes(arr)
console.log(arr);