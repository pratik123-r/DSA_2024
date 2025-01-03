/**
 * Given the root of a complete binary tree, return the number of the nodes in the tree.
 */

const { createTree, TreeNode } = require('./../tree-helper')


function countNode(root) {
    let count = 0
    function sol(root) {
        if (!root)
            return
        count++
        sol(root.left)
        sol(root.right)

    }
    sol(root)
    return count
}



//      1
//    /   \
//   2     3
//  / \      \
// 4   5      6
//    / \    / \
//   7   8  9  10


root = createTree([1, 2, 3, 4, 5, null, 6, null, null, 7, 8, null, null, 9, 10]);
console.log(countNode(root));