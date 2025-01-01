/**
 * https://takeuforward.org/data-structure/vertical-order-traversal-of-binary-tree/
 */


const { createTree, TreeNode } = require('./../tree-helper')

function verticalOrderTraversal(root) {
    if (!root) return [];

    let columnTable = new Map(); // Stores nodes grouped by their column indices
    let queue = [[root, 0, 0]]; // [node, row, column]
    let minColumn = 0, maxColumn = 0;

    while (queue.length > 0) {
        let [node, row, column] = queue.shift();

        if (node) {
            if (!columnTable.has(column)) {
                columnTable.set(column, []);
            }
            columnTable.get(column).push([row, node.val]);

            minColumn = Math.min(minColumn, column);
            maxColumn = Math.max(maxColumn, column);

            queue.push([node.left, row + 1, column - 1]);
            queue.push([node.right, row + 1, column + 1]);
        }
    }    

    let result = [];
    for (let col = minColumn; col <= maxColumn; col++) {
        columnTable.get(col).sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1]; // Sort by value if row is the same
            }
            return 1
        });

        result.push(columnTable.get(col).map((pair) => pair[1]));
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


console.log(verticalOrderTraversal(root));
