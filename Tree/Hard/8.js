const { createTree, TreeNode } = require('./../tree-helper')

function buildTree(preorder, inorder) {
    const map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);  // Store indices of inorder elements for quick lookup
    }

    let preIndex = 0;  // To track the current root in preorder array
    
    const helper = (inStart, inEnd) => {
        console.log(inStart);
        
        if (inStart > inEnd) return null;

        // The first element in preorder is the root node
        let rootVal = preorder[preIndex++];
        let root = new TreeNode(rootVal);

        // Get the index of the root in inorder list
        let rootIndex = map.get(rootVal);

        // Build the left and right subtrees
        root.left = helper(inStart, rootIndex - 1);
        root.right = helper(rootIndex + 1, inEnd);

        return root;
    };

    return helper(0, inorder.length - 1);
}

// Example input
const preorder = [1, 2, 4, 5, 3, 6, 7];
const inorder = [4, 2, 5, 1, 6, 3, 7];

// Build the tree
const root = buildTree(preorder, inorder);
