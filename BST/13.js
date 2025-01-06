function largestBSTSubtree(root) {
    // Helper function that returns an object with properties:
    // - isBST: Whether the current subtree is a BST
    // - size: Size of the largest BST in the subtree
    // - min: Minimum value in the subtree
    // - max: Maximum value in the subtree
    function helper(node) {
        if (node === null) {
            return {
                isBST: true,
                size: 0,
                min: Infinity,
                max: -Infinity,
            };
        }

        const left = helper(node.left);
        const right = helper(node.right);

        if (
            left.isBST &&
            right.isBST &&
            node.val > left.max &&
            node.val < right.min
        ) {
            // Current subtree is a BST
            return {
                isBST: true,
                size: left.size + right.size + 1,
                min: Math.min(node.val, left.min),
                max: Math.max(node.val, right.max),
            };
        }

        // Current subtree is not a BST
        return {
            isBST: false,
            size: Math.max(left.size, right.size),
            min: 0,
            max: 0,
        };
    }

    return helper(root).size;
}
