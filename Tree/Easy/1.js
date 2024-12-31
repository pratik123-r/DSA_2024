class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Recursive Pre-order Traversal (Node -> Left -> Right)
function preorderTraversalRecursive(node) {
    if (node === null) return;
    console.log(node.value);
    preorderTraversalRecursive(node.left);
    preorderTraversalRecursive(node.right);
}

// Iterative Pre-order Traversal (Node -> Left -> Right)
function preorderTraversalIterative(root) {
    if (root === null) return;

    const stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        console.log(node.value);

        if (node.right) stack.push(node.right); // Push right child first
        if (node.left) stack.push(node.left);   // Push left child last
    }
}

// Recursive In-order Traversal (Left -> Node -> Right)
function inorderTraversalRecursive(node) {
    if (node === null) return;
    inorderTraversalRecursive(node.left);
    console.log(node.value);
    inorderTraversalRecursive(node.right);
}

// Iterative In-order Traversal (Left -> Node -> Right)
function inorderTraversalIterative(root) {
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current); // Go as left as possible
            current = current.left;
        }

        current = stack.pop();
        console.log(current.value); // Process the node
        current = current.right;    // Visit the right subtree
    }
}

// Recursive Post-order Traversal (Left -> Right -> Node)
function postorderTraversalRecursive(node) {
    if (node === null) return;
    postorderTraversalRecursive(node.left);
    postorderTraversalRecursive(node.right);
    console.log(node.value);
}

// Iterative Post-order Traversal (Left -> Right -> Node)
function postorderTraversalIterative(root) {
    if (root === null) return;

    const stack = [root];
    const output = [];

    while (stack.length > 0) {
        const node = stack.pop();
        output.push(node.value);

        if (node.left) stack.push(node.left);   // Push left child first
        if (node.right) stack.push(node.right); // Push right child last
    }

    // Reverse the output to get the correct post-order sequence
    output.reverse().forEach(value => console.log(value));
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

console.log("Recursive Pre-order Traversal:");
preorderTraversalRecursive(root);

console.log("Iterative Pre-order Traversal:");
preorderTraversalIterative(root);

console.log("Recursive In-order Traversal:");
inorderTraversalRecursive(root);

console.log("Iterative In-order Traversal:");
inorderTraversalIterative(root);

console.log("Recursive Post-order Traversal:");
postorderTraversalRecursive(root);

console.log("Iterative Post-order Traversal:");
postorderTraversalIterative(root);
