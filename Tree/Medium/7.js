

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

const { createTree, TreeNode } = require('./../tree-helper')


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var boundaryTraversal = function (root) {
    if (!root) return [];

    let result = [];

    // Check if the node is a leaf
    const isLeaf = (node) => !node.left && !node.right;

    // Add the left boundary (excluding leaf nodes)
    const addLeftBoundary = (node) => {
        let current = node.left;
        while (current) {
            if (!isLeaf(current)) result.push(current.val);
            current = current.left ? current.left : current.right;
        }
    };

    // Add leaf nodes using in-order traversal
    const addLeaves = (node) => {
        if (!node) return;
        if (isLeaf(node)) {
            result.push(node.val);
            return;
        }
        addLeaves(node.left);
        addLeaves(node.right);
    };

    // Add the right boundary (excluding leaf nodes) in reverse
    const addRightBoundary = (node) => {
        let current = node.right;
        let temp = [];
        while (current) {
            if (!isLeaf(current)) temp.push(current.val);
            current = current.right ? current.right : current.left;
        }
        result.push(...temp.reverse());
    };

    // Root node is part of the boundary
    if (!isLeaf(root)) result.push(root.val);

    addLeftBoundary(root);
    addLeaves(root);
    addRightBoundary(root);

    return result;
};


//      1
//    /   \
//   2     3
//  / \      \
// 4   5      6
//    / \    / \
//   7   8  9  10


root = createTree([1, 2, 3, 4, 5, null, 6, null, null, 7, 8, null, null, 9, 10]);


console.log(boundaryTraversal(root));
