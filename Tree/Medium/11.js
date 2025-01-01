/**
 * Top view of a binary tree
 */


const { createTree, TreeNode } = require('./../tree-helper')


function rightView(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let currentLevelSize = queue.length;

        // Iterate through the current level
        for (let i = 0; i < currentLevelSize; i++) {
            let node = queue.shift();

            // If this is the last node at the current level, add it to the result
            if (i === currentLevelSize - 1) {
                result.push(node.val);
            }

            // Add child nodes to the queue for the next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
}






//      1
//    /   \
//   2     3
//  / \      \
// 4   5      6
//    / \    / \
//   7   8  9  10


root = createTree([1, 2, 3, 4, 5, null, 6, null, null, 7, 8, null, null, 9, 10]);
console.log(rightView(root));


