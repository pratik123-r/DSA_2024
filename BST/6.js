/**
 * 700. Search in a Binary Search Tree
 */

var searchBST = function(root, val) {
    if(!root)
        return root
    if(root.val === val)
        return root
    else if(root.val < val)
        return searchBST(root.right, val)
    else 
        return searchBST(root.left, val)
};