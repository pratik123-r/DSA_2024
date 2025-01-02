/**
 * Root to Leaf Paths
 */

const { createTree, TreeNode } = require('./../tree-helper')


function rootToLeaf(root) {
    let ans = []
    function sol(root, temp) {
        if (!root)
            return;

        temp.push(root.val)
        sol(root.left, temp)
        sol(root.right, temp)
        if (!root.left && !root.right)
            ans.push([...temp])
        temp.pop()
    }
    sol(root, [])
    return ans
}



//      1
//    /   \
//   2     3
//  / \      \
// 4   5      6
//    / \    / \
//   7   8  9  10


root = createTree([1, 2, 3, 4, 5, null, 6, null, null, 7, 8, null, null, 9, 10]);
console.log(rootToLeaf(root));
