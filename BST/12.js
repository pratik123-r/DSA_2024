/** https://leetcode.com/problems/recover-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    if (root === null) return;

    let prev = null;
    let first = null;
    let second = null;
    function inorder(root) {
        if (root === null) return;

        inorder(root.left);

        if (prev !== null && root.val < prev.val) {
            if (first === null) {
                first = prev;
            }
            second = root;
        }
        prev = root;

        inorder(root.right);
    }
    inorder(root);

    const temp = first.val;
    first.val = second.val;
    second.val = temp;
};