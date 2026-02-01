/**
 * https://leetcode.com/problems/maximum-width-of-binary-tree/description/
 */


const { createTree, TreeNode } = require('./../tree-helper')


function widthOfBinaryTree(arr) {
    if (!arr.length || arr[0] === null) return 0;

    let maxWidth = 0;
    // Queue stores [index in array, heapIndex]
    let queue = [[0, 0]];

    while (queue.length) {
        const levelLength = queue.length;
        const firstHeapIndex = queue[0][1];
        const lastHeapIndex = queue[queue.length - 1][1];
        maxWidth = Math.max(maxWidth, lastHeapIndex - firstHeapIndex + 1);

        for (let i = 0; i < levelLength; i++) {
            const [arrIndex, heapIndex] = queue.shift();

            // Left child in array
            const leftIndex = 2 * arrIndex + 1;
            if (leftIndex < arr.length && arr[leftIndex] !== null) {
                queue.push([leftIndex, 2 * heapIndex]);
            }

            // Right child in array
            const rightIndex = 2 * arrIndex + 2;
            if (rightIndex < arr.length && arr[rightIndex] !== null) {
                queue.push([rightIndex, 2 * heapIndex + 1]);
            }
        }
    }

    return maxWidth;
}



root = createTree([1, 3, 2, 5, null, null, 9, 6, null, null, null, null, null, 7]);


console.log(widthOfBinaryTree(root));