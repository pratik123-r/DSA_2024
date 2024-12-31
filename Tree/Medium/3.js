/**
 * Diameter of Binary Tree
 */

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

// optimal

var diameterOfBinaryTree = function(root) {
    let max = 0;

    var height = function(root) {
        if (!root) return 0;

        let lh = height(root.left);
        let rh = height(root.right);

        // Update the maximum diameter at this node
        max = Math.max(max, lh + rh);

        // Return the height of the current node
        return Math.max(lh, rh) + 1;
    };

    height(root);
    return max;
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

console.log(diameterOfBinaryTree(root));
