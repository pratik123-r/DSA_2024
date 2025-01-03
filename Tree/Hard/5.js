/**
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/
 */


const { createTree, TreeNode } = require('./../tree-helper')


function distanceK(root, target, k) {
    let map = new Map()
    dfs(root, null, map)
    let visited = new Set()
    visited.add(target)
    let queue = [target];
    while (queue.length) {
        let currentLevel = queue.length
        if (k == 0) {
            return queue.map((node) => node.val)
        }
        for (let i = 0; i < currentLevel; i++) {
            node = queue.shift()
            if (node.left && !visited.has(node.left)) {
                queue.push(node.left)
                visited.add(node.left)
            }
            if (node.right && !visited.has(node.right)) {
                queue.push(node.right)
                visited.add(node.right)
            }
            if (map.get(node) && !visited.has(map.get(node))) {
                queue.push(map.get(node))
                visited.add(map.get(node))
            }
        }
        k--
    }
    return []
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





