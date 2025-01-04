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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let ans;
    function sol(root) {
        if (!root || k === 0)
            return
        sol(root.left)
        k--;
        if (k == 0) {
            ans = root.val
        }
        sol(root.right)
    }

    sol(root)

    return ans
};