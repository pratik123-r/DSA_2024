class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Level-order Traversal that stores result level-wise
function levelOrderTraversal(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root]; // Initialize the queue with the root node

    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Dequeue the front node
            currentLevel.push(node.value); // Add its value to the current level array

            if (node.left) queue.push(node.left);   // Enqueue the left child
            if (node.right) queue.push(node.right); // Enqueue the right child
        }

        result.push(currentLevel); // Add the current level to the result array
    }

    return result;
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

console.log("Level-order Traversal (Level-wise Array):");
const levels = levelOrderTraversal(root);
console.log(levels);
