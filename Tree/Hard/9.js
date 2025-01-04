/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return []; // Handle edge case where root is null

    let ans = [];
    let queue = [root];

    while (queue.length) {
        let node = queue.shift();
        if (node) {
            ans.push(node.val); // Add the value of the node to the result
            queue.push(node.left); // Add the left child to the queue (even if it's null)
            queue.push(node.right); // Add the right child to the queue (even if it's null)
        } else {
            ans.push(null); // Push null for missing nodes
        }
    }

    // Trim trailing nulls from the serialized output for compactness
    while (ans[ans.length - 1] === null) {
        ans.pop();
    }

    return ans;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {Array} arr
 * @return {TreeNode}
 */
var deserialize = function(arr) {
    if (!arr || arr.length === 0) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let node = queue.shift();

        if (node) {
            // Add the left child
            if (i < arr.length && arr[i] !== null) {
                node.left = new TreeNode(arr[i]);
                queue.push(node.left);
            }
            i++;

            // Add the right child
            if (i < arr.length && arr[i] !== null) {
                node.right = new TreeNode(arr[i]);
                queue.push(node.right);
            }
            i++;
        }
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
