function findMissingElement(arr) {
    let start = 0;
    let end = arr.length - 1;

    // Binary search to find the missing element
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // If the value at mid doesn't match the expected value, the missing element is on the left
        if (arr[mid] == arr[0] + mid) {
            start = mid + 1;
        } else {
            // Otherwise, the missing element is on the right
            end = mid - 1;
        }
    }

    // Once we exit the loop, 'start' is the index where the missing element should be
    return arr[0] + start;
}

// Example usage:
let arr = [31, 32, 34, 35, 36]; // The missing element is 33
console.log(findMissingElement(arr)); // Output: 33
