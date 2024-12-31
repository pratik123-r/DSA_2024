/**
 * 110. Balanced Binary Tree
 */



class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// naive sol
var isBalanced = function (root) {
    if (!root)
        return true

    let diff = Math.abs(maxDepth(root.left) - maxDepth(root.right))
    if (diff > 1)
        return false

    return isBalanced(root.left) && isBalanced(root.right)
};

var maxDepth = function (root) {
    if (!root)
        return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// optimal

var isBalancedOptimal = function(root) {
    return height(root) === -1 ? false : true
}

var height = function (root) {
    if(!root)
        return 0;
    let lh = height(root.left)
    let rh = height(root.right)
    if (lh == -1 || rh == -1) {
        return -1;
    }
    if (Math.abs(lh - rh) > 1) {
        return -1;
    }
    return Math.max(lh, rh) + 1
}


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
