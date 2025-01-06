/**
 * 1008. Construct Binary Search Tree from Preorder Traversal
 */


/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    let inorder = [...preorder].sort((a, b) => a - b)
    const map = new Map()
    inorder.forEach((data, index) => map.set(data, index))
    let i = 0
    function solve(left, right) {
        if(right > left)
            return null

        let node = new TreeNode(preorder[i])
        let index = map.get(preorder[i])
        i++
        node.left = solve(left, index - 1)
        node.right = solve(index + 1, right)
        return node
    }
    solve(0, preorder.length-1)
};

// optimise sol
function construct(bound, preorder) {
    if (i >= preorder.length || preorder[i] > bound) return null;

    let node = new TreeNode(preorder[i++]);
    node.left = construct(node.val, preorder);
    node.right = construct(bound, preorder);
    return node;
}



