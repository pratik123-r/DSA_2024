/**
    Problem Statement: Given an array of length N. Peak element is defined as the element greater than both of its neighbors. 
    Formally, if 'arr[i]' is the peak element, 'arr[i - 1]' < 'arr[i]' and 'arr[i + 1]' < 'arr[i]'. 
    Find the index(0-based) of a peak element in the array. If there are multiple peak numbers,
    return the index of any peak number.
 */

function findPeakElement(arr) {
    let n = arr.length; // Size of the array

    // Edge cases:
    if (n === 1) return 0;
    if (arr[0] > arr[1]) return 0;
    if (arr[n - 1] > arr[n - 2]) return n - 1;

    let low = 1, high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If arr[mid] is the peak:
        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1])
            return mid;

        // If we are in the left:
        if (arr[mid] > arr[mid - 1]) low = mid + 1;

        // If we are in the right:
        // Or, arr[mid] is a common point:
        else high = mid - 1;
    }
    // Dummy return statement
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];
let ans = findPeakElement(arr);
console.log("The peak is at index:", ans);




function lowerBound(arr, x){
    let l = 0;
    let r = arr.length -1
    let ans = arr.length

    while (l < r) {
        let mid = Math.floor((l+r)/2)
        if(arr[mid] == x)
            return mid
        else if(arr[mid] > x) {
            ans = arr[mid]
            r = mid -1
        } else {
            l = mid + 1
        }
    }
    return ans
}

