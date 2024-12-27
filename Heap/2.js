/**
 * Does array represent Heap
   https://www.geeksforgeeks.org/problems/does-array-represent-heap4345/1?
*/



// Helper function to get left child index
function getLeftChildIndex(index) {
    return 2 * index + 1;
}

// Helper function to get right child index
function getRightChildIndex(index) {
    return 2 * index + 2;
}

function isMaxHeap(arr, root) {
    // If root is out of bounds, return true (base case)
    if (root >= arr.length) {
        return true;
    }

    const leftChildIndex = getLeftChildIndex(root);
    const rightChildIndex = getRightChildIndex(root);

    // If the left child exists and is greater than the current root, it's not a max heap
    if (leftChildIndex < arr.length && arr[root] < arr[leftChildIndex]) {
        return false;
    }

    // If the right child exists and is greater than the current root, it's not a max heap
    if (rightChildIndex < arr.length && arr[root] < arr[rightChildIndex]) {
        return false;
    }

    // Recursively check the left and right subtrees
    return isMaxHeap(arr, leftChildIndex) && isMaxHeap(arr, rightChildIndex);
}


console.log(isMaxHeap([90, 15, 10, 7, 12, 2],0));
console.log(isMaxHeap([9, 15, 10, 7, 12, 11],0));



