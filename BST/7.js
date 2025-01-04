/**
 * Minimum element in BST
 */

class Solution {
    // Function to find the minimum element in the given BST.
    minValue(root) {
        if (!root) return -1; // If the tree is empty, return -1 (or any suitable "not found" value)

        // Traverse to the leftmost node to find the minimum value
        while (root.left !== null) {
            root = root.left;
        }

        return root.data; // Return the value of the leftmost node
            
    }
    

}