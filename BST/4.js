/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    function sol(root, min, max) {
        if (!root)
            return true;
        if (max <= root.val || root.val <= min)
            return false
       return sol(root.left, min, root.val) && sol(root.right, root.val, max)
    }
    return sol(root, -Infinity, +Infinity)
};