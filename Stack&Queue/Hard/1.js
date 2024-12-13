function maxSlidingWindow(nums, k) {
    const n = nums.length;
    const result = [];
    const deque = []; // Stores indices of array elements

    for (let i = 0; i < n; i++) {
        // Remove indices of elements not in the current sliding window
        if (deque.length && deque[0] === i - k) {
            deque.shift();
        }

        // Remove smaller numbers in k range as they are not useful
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add the current element index to the deque
        deque.push(i);

        // Add the maximum element of the current window to the result
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// Example usage
const arr = [4, 0, -1, 3, 5, 3, 6, 8];
const k = 3;
console.log("Maximum element in every " + k + " window: ");
console.log(maxSlidingWindow(arr, k));  // Output: [4, 3, 5, 5, 6, 8]
