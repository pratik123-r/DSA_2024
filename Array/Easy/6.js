/**
    Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.
    Example 1:
    Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
    Output: 6 7 1 2 3 4 5
    Explanation: array is rotated to right by 2 position .

    Example 2:
    Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left 
    Output: 9 10 11 3 7 8
    Explanation: Array is rotated to right by 3 position.
 */

function rotateArray(arr, x){
    reverse(arr, arr.length - x, arr.length - 1)
    reverse(arr, 0, arr.length - x - 1);
    reverse(arr, 0, arr.length - 1)
}
function reverse(arr, i , j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}
let arr = [3,7,8,9,10,11]
rotateArray(arr, 3);
console.log(arr);
