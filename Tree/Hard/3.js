/**
 * https://leetcode.com/problems/maximum-width-of-binary-tree/description/
 */


const { createTree, TreeNode } = require('./../tree-helper')


function widthOfBinaryTree(root) {
    let ans = 0;
    let queue = [{ node: root, index: 0 }]
    while (queue.length) {
        let currentLevel = queue.length

        let max = Number.MIN_VALUE
        let min = Number.MAX_VALUE

        for (let i = 0; i < currentLevel; i++) {
            let { node, index } = queue.shift();
            max = Math.max(max, index)
            min = Math.min(min, index)
            if (node.left) {
                queue.push({
                    node: node.left,
                    index: (2 * index) + 1,
                })
            }
            if (node.right) {
                queue.push({
                    node: node.right,
                    index: (2 * index) + 2,
                })
            }
        }
        ans = Math.max(ans, max - min + 1)

    }
    return ans


}






root = createTree([1, 3, 2, 5, null, null, 9, 6, null, null, null, null, null, 7]);


console.log(widthOfBinaryTree(root));