/**
 * Flatten Binary Tree to Linked List
 */

let prev = null
var flatten = function(root) {
    if(!root)
        return

    flatten(root.right)
    flatten(root.left)
    root.left = null;
    root.right = prev;
    prev = root;

};