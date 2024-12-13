/**
 * Problem Statement: Given an array of N integers. Every number in the array except one appears twice. Find the single number in the array.
 */





 function singleNonDuplicate(arr) {
    let n = arr.length; // Size of the array

    // Edge cases:
    if (n === 1) return arr[0];
    if (arr[0] !== arr[1]) return arr[0];
    if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

    let low = 1, high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If arr[mid] is the single element:
        if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
            return arr[mid];
        }

        // We are in the left:
        if ((mid % 2 === 1 && arr[mid] === arr[mid - 1])
                || (mid % 2 === 0 && arr[mid] === arr[mid + 1])) {
            // Eliminate the left half:
            low = mid + 1;
        }
        // We are in the right:
        else {
            // Eliminate the right half:
            high = mid - 1;
        }
    }

    // Dummy return statement:
    return -1;
}

let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
let ans = singleNonDuplicate(arr);
console.log("The single element is:", ans); // 4

