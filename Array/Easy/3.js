/**
   Problem Statement: Given an array of size n, write a program to check if the given array is 
   sorted in (ascending / Increasing / Non-decreasing) order or not.
    If the array is sorted then return True, Else return False.
 */

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1])
            return false;
    }
    return true;
}

const arr = [1, 2, 3, 4, 5];

console.log(isSorted(arr) ? "True" : "False");