/**
 * 
    124. Binary Tree Maximum Path Sum
 */

class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

var maxPathSum = function(root) {
    let max = Number.MIN_SAFE_INTEGER;

    var sum = function(root) {
        if (!root) return 0;

        // Calculate the maximum sum for the left and right subtrees, ignoring negative sums
        let lsum = Math.max(0, sum(root.left));
        let rsum = Math.max(0, sum(root.right));

        // Update the global maximum path sum considering the current node as the root of the path
        max = Math.max(max, lsum + rsum + root.val);

        // Return the maximum path sum including the current node and one of its subtrees
        return root.val + Math.max(lsum, rsum);
    };

    sum(root);
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

console.log(maxPathSum(root));
