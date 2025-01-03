/**
 * MIN time to burn tree
 */

const { createTree, TreeNode } = require('./../tree-helper')


function minTime(root, targetVal) {
    // Locate the target node
    const target = findTarget(root, targetVal);
    if (!target) return 0; // If target is not found, return 0

    // Build the parent map
    const parentMap = new Map();
    dfs(root, null, parentMap);

    // Initialize for BFS
    const visited = new Set();
    visited.add(target);
    const queue = [target];
    let time = 0;

    // Perform BFS to calculate burn time
    while (queue.length) {
        let currentLevelSize = queue.length;
        let burned = false;

        for (let i = 0; i < currentLevelSize; i++) {
            const node = queue.shift();

            // Check left child
            if (node.left && !visited.has(node.left)) {
                queue.push(node.left);
                visited.add(node.left);
                burned = true;
            }

            // Check right child
            if (node.right && !visited.has(node.right)) {
                queue.push(node.right);
                visited.add(node.right);
                burned = true;
            }

            // Check parent
            const parent = parentMap.get(node);
            if (parent && !visited.has(parent)) {
                queue.push(parent);
                visited.add(parent);
                burned = true;
            }
        }

        // Increment time if any node burned at this level
        if (burned) time++;
    }

    return time;
}

function dfs(node, parent, map) {
    if (!node) return;

    map.set(node, parent);

    dfs(node.left, node, map);
    dfs(node.right, node, map);
}

function findTarget(node, targetVal) {
    if (!node) return null;
    if (node.val === targetVal) return node;
    return findTarget(node.left, targetVal) || findTarget(node.right, targetVal);
}



root = createTree([1, 2, 3, 4, 5, null, 6, null, null, 7, 8, null, 9, null, null, null, null, null, 10]);


console.log(minTime(root, 8));
