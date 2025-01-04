/**
 * Insert into a Binary Search Tree
 */

function insertIntoBST(root, val) {
    if (!root) return new TreeNode(val); // If the tree is empty, return a new node

    let curr = root;

    while (true) {
        if (val < curr.val) {
            if (!curr.left) {
                curr.left = new TreeNode(val); // Insert as the left child
                break;
            } else {
                curr = curr.left; // Move to the left child
            }
        } else {
            if (!curr.right) {
                curr.right = new TreeNode(val); // Insert as the right child
                break;
            } else {
                curr = curr.right; // Move to the right child
            }
        }
    }

    return root; // Return the updated tree
}
