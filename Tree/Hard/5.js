/**
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/
 */


const { createTree, TreeNode } = require('./../tree-helper')


function distanceK(root, target, k) {
    let map = new Map();
    dfs(root, null, map); // build child → parent map

    let visited = new Set();
    visited.add(target);

    // Queue stores pairs: [node, distanceFromTarget]
    let queue = [[target, 0]];

    let result = [];

    while (queue.length) {
        let [node, dist] = queue.shift();

        // If current node is at distance k, add to result
        if (dist === k) {
            result.push(node.val);
        }

        // Only expand neighbors if dist < k
        if (dist < k) {
            let neighbors = [node.left, node.right, map.get(node)];
            for (let nei of neighbors) {
                if (nei && !visited.has(nei)) {
                    visited.add(nei);
                    queue.push([nei, dist + 1]);
                }
            }
        }
    }

    return result;
}


const dfs = (node, parent, map) => {
    if (!node) return;

    map.set(node, parent);

    if (node.left) dfs(node.left, node, map);
    if (node.right) dfs(node.right, node, map);

    return;
}


// {
//     var distanceK = function (root, target, K) {
//         if (!root) return []
//         const node = findTarget(root, null, target)
//         const res = []
//         findAllKApart(node, K, res)
//         return res
//     };

//     function findTarget(root, parent, target) {
//         if (!root) return null
//         root.parent = parent
//         if (root === target) {
//             return root
//         }
//         return findTarget(root.left, root, target) || findTarget(root.right, root, target)
//     }

//     function findAllKApart(root, k, res) {
//         if (!root || root.visited) return res
//         if (k == 0) {
//             res.push(root.val)
//             return res
//         }
//         root.visited = true
//         findAllKApart(root.left, k - 1, res)
//         findAllKApart(root.right, k - 1, res)
//         findAllKApart(root.parent, k - 1, res)
//         return res
//     }
// }




root = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);


console.log(distanceK(root, root.left, 2));





