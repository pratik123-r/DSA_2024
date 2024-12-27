/**
 * 
    Convert Min Heap to Max Heap
 */

// Helper function to get left child index
function getLeftChildIndex(index) {
    return 2 * index + 1;
}

// Helper function to get right child index
function getRightChildIndex(index) {
    return 2 * index + 2;
}

// Function to heapify the array and maintain max heap property
function maxHeapify(arr, n, i) {
    let largest = i;
    const left = getLeftChildIndex(i);
    const right = getRightChildIndex(i);

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root, swap and continue heapifying
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap elements
        maxHeapify(arr, n, largest); // Recursively heapify the affected subtree
    }
}

// Function to convert a min heap to a max heap
function convertMinHeapToMaxHeap(arr) {
    const n = arr.length;

    // Start from the last non-leaf node and heapify each node
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, n, i);
    }

    return arr;
}

// Test cases
console.log(convertMinHeapToMaxHeap([1, 3, 6, 5, 9, 8]));  // [9, 5, 8, 3, 1, 6]
console.log(convertMinHeapToMaxHeap([4, 6, 5, 9, 8, 7]));  // [9, 8, 7, 6, 4, 5]
