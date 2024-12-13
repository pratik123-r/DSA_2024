/*
    Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). 
    Now the array is rotated between 1 to N times which is unknown. Find the minimum element in the array. 
 */




function findMin(arr) {
    let low = 0, high = arr.length - 1;
    let ans = Infinity;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        //search space is already sorted
        //then arr[low] will always be
        //the minimum in that search space:
        if (arr[low] <= arr[high]) {
            ans = Math.min(ans, arr[low]);
            break;
        }

        // If left part is sorted:
        if (arr[low] <= arr[mid]) {
            // Keep the minimum:
            ans = Math.min(ans, arr[low]);

            // Eliminate left half:
            low = mid + 1;
        } else { // If right part is sorted:
            // Keep the minimum:
            ans = Math.min(ans, arr[mid]);

            // Eliminate right half:
            high = mid - 1;
        }
    }
    return ans;
}

let arr = [4, 5, 6, 7, 0, 1, 2, 3];
let ans = findMin(arr);
console.log("The minimum element is: " + ans);


