/**
 * 103. Binary Tree Zigzag Level Order Traversal
 */

const { createTree, TreeNode } = require('./../tree-helper')

var zigzagLevelOrder = function (root) {
    if (!root) return []; // Handle edge case where root is null

    let ans = [];
    let queue = [root];
    let level = 0;

    while (queue.length) {
        let currentLevel = queue.length;
        let temp = [];

        for (let index = 0; index < currentLevel; index++) {
            let node = queue.shift(); // Remove the first element from the queue

            temp.push(node.val);

            if (node.left) queue.push(node.left); // Add left child to the queue
            if (node.right) queue.push(node.right); // Add right child to the queue
        }

        // Reverse the current level if it is an odd level
        if (level % 2 !== 0) temp.reverse();

        ans.push(temp);
        level++;
    }

    return ans;
};




root = createTree([1, 2, 3, 4, 5, 6, 7]);
console.log(zigzagLevelOrder(root)); // Output: [ [ 1 ], [ 3, 2 ], [ 4, 5, 6, 7 ] ]


root = createTree([1, 2]);
console.log(zigzagLevelOrder(root)); // Output: [ [ 1 ], [ 3, 2 ], [ 4, 5, 6, 7 ] ]