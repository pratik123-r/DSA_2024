/**
    Problem Statement: Given an array, we have to find the largest element in the array.
   
    Example 1:
    Input:
    arr[] = {2,5,1,3,0};
    Output:
    5
    Explanation:
    5 is the largest element in the array. 

    Example2:
    Input:
    arr[] = {8,10,5,7,9};
    Output:
    10
    Explanation:
    10 is the largest element in the array.

 */

function findLargestElement(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

const arr1 = [2, 5, 1, 3, 0];
let max = findLargestElement(arr1);
console.log("The largest element in the array is: " + max);

const arr2 = [8, 10, 5, 7, 9];
max = findLargestElement(arr2);
console.log("The largest element in the array is: " + max);