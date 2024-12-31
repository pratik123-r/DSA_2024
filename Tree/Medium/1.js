/**
 * Maximum Depth of Binary Tree
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


var maxDepth = function(root) {
    if(!root)
        return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) 
};


// Example Usage
// Create a sample tree
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(maxDepth(root));
