/*
    Problem Statement: Given an array of N integers, left rotate the array by one place.
 */

function solve(arr, n) {
    let temp = arr[0]; // storing the first element of the array in a variable
    for (let i = 0; i < n - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[n - 1] = temp; // assign the value of the variable at the last index
  }
  
  let n = 5;
  
  let arr = [1, 2, 3, 4, 5];
  solve(arr, n);
  console.log(arr);