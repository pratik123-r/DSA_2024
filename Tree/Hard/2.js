/**
 * LCA of binary tree
 */

const { createTree, TreeNode } = require('./../tree-helper')


function LCA(root, p, q) {
    if (!root || root.val === p.val || root.val === q.val)
        return root

    if (root.val === p.val || root.val === q.val)
        return root.val

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)    

    if (left && right) {
        return root;
    }

    return left || right;
}



//      1
//    /   \
//   2     3
//  / \      \
// 4   5      6
//    / \    / \
//   7   8  9  10


root = createTree([1, 2, 3, 4, 5, null, 6, null, null, 7, 8, null, null, 9, 10]);
console.log(LCA(root, new TreeNode(4), new TreeNode(8)));
