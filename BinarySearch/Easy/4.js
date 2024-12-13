/**
 * Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. 
 * Now the array is rotated at some pivot point unknown to you. 
 * Find the index at which k is present and if k is not present return -1.
 */


function search(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (arr[mid] == x) {
                return mid;
        } else if (arr[mid] <= arr[high]) {
            if (arr[mid] <= x && x <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            if (arr[mid] >= x && x >= arr[low]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }
    return -1
}

console.log(search([7, 8, 9, 1, 2, 3, 4, 5], 4));
