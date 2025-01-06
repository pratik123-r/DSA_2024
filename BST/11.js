/**
 * 653. Two Sum IV - Input is a BST :=> https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
 */

var findTarget = function(root, k) {
    let set = new Set()
    let bool = false;
    function sol(root, k) {
        if(!root)
            return 
        if(set.has(k - root.val)) {
            bool = true
            return
        }
        set.add(root.val)
        sol(root.left, k)
        sol(root.right, k)
    }
    sol(root, k)
    return bool
};