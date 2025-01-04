/**
 * 450. Delete Node in a BST
 */

function deleteNode(root, key) {
    if (!root) return null; // Base case: if the tree is empty, return null

    // If the key to be deleted is smaller than the root's key,
    // it lies in the left subtree.
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    }
    // If the key to be deleted is greater than the root's key,
    // it lies in the right subtree.
    else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    // If the key is equal to the root's key, this is the node to delete.
    else {
        // Case 1: Node with only one child or no child
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Case 2: Node with two children
        // Find the inorder successor (smallest in the right subtree)
        let successor = findMin(root.right);
        // Copy the inorder successor's value to this node
        root.val = successor.val;
        // Delete the inorder successor
        root.right = deleteNode(root.right, successor.val);
    }

    return root;
}

// Helper function to find the minimum value node in a tree
function findMin(node) {
    while (node.left) {
        node = node.left;
    }
    return node;
}
