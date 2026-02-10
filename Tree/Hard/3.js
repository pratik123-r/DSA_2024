/**
 * https://leetcode.com/problems/maximum-width-of-binary-tree/description/
 */


const { createTree, TreeNode } = require('./../tree-helper')


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    if (!root) return 0;

    let maxWidth = 0;
    // Queue stores [node, heapIndex]
    let queue = [[root, 0]];

    while (queue.length > 0) {
        const levelLength = queue.length;
        const firstIndex = queue[0][1];
        const lastIndex = queue[queue.length - 1][1];
        maxWidth = Math.max(maxWidth, lastIndex - firstIndex + 1);

        for (let i = 0; i < levelLength; i++) {
            const [node, index] = queue.shift();
            if (node.left!=null) queue.push([node.left, 2 * index + 1]);
            if (node.right!=null) queue.push([node.right, 2 * index + 2]);
        }
    }

    return maxWidth;

};


var widthOfBinaryTreeDFS = function(root) {
    if (!root) return 0;

    let maxWidth = 0;
    const firstIndexAtLevel = new Map(); // level -> first index seen

    function dfs(node, level, index) {
        if (!node) return;

        // record first index for this level
        if (!firstIndexAtLevel.has(level)) {
            firstIndexAtLevel.set(level, index);
        }

        // compute width at this level
        const width = index - firstIndexAtLevel.get(level) + 1;
        maxWidth = Math.max(maxWidth, width);

        // recurse left and right with heap-like indices
        dfs(node.left, level + 1, 2 * index + 1);
        dfs(node.right, level + 1, 2 * index + 2);
    }

    dfs(root, 0, 0); // start DFS from root at level 0, index 0
    return maxWidth;


};


root = createTree([1, 3, 2, 5, null, null, 9, 6, null, null, null, null, null, 7]);


console.log(widthOfBinaryTree(root));