/**
 * Top view of a binary tree
 */


const { createTree, TreeNode } = require('./../tree-helper')


function topView(root) {
    if (!root) return [];

    let columnTable = new Map(); // Stores the first node at each column index
    let queue = [[root, 0]]; // [node, column]
    let minColumn = 0, maxColumn = 0;

    while (queue.length > 0) {
        let [node, column] = queue.shift();

        if (!columnTable.has(column)) {
            columnTable.set(column, node.val);
        }

        minColumn = Math.min(minColumn, column);
        maxColumn = Math.max(maxColumn, column);

        if (node.left) {
            queue.push([node.left, column - 1]);
        }

        if (node.right) {
            queue.push([node.right, column + 1]);
        }
    }

    let result = [];
    for (let col = minColumn; col <= maxColumn; col++) {
        result.push(columnTable.get(col));
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


console.log(topView(root));
