/**
 * MIN time to burn tree
 */

const { createTree, TreeNode } = require('./../tree-helper')


function minTime(root, targetVal) {
    // Locate the target node
    const target = findTarget(root, targetVal);
    if (!target) return 0;

    // Build parent map
    const parentMap = new Map();
    dfs(root, null, parentMap);

    // Queue stores pairs: [node, timeFromTarget]
    const queue = [[target, 0]];
    const visited = new Set([target]);
    let maxTime = 0;

    while (queue.length) {
        const [node, time] = queue.shift();
        maxTime = Math.max(maxTime, time);

        const neighbors = [node.left, node.right, parentMap.get(node)];
        for (const nei of neighbors) {
            if (nei && !visited.has(nei)) {
                visited.add(nei);
                queue.push([nei, time + 1]);
            }
        }
    }

    return maxTime;
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
