/**
 * 101. Symmetric Tree
 */


const { createTree, TreeNode } = require('./../tree-helper')




var isSymmetric = function (root) {

    function solve (left, right) {
        if(!left || !right) 
            return left == right

        return left.val == right.val && solve(left.left, right.right) && solve(left.right, right.left)
    }
    return !root || solve(root.left, root.right)

};





root = createTree([1, 2, 2, 3, 4, 4, 3]);
console.log(isSymmetric(root));

root = createTree([1, 2, 2, null, 3, null, 3]);
console.log(isSymmetric(root));