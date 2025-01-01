/**
 * https://leetcode.com/problems/same-tree/description/
 * 100. Same Tree
 */

const { createTree, TreeNode } = require('./../tree-helper')


function isSameTree(p, q) {
    if (!p || !q)
        return p == q

   return p.val == q.val &&
   isSameTree(p.left, q.left) &&
   isSameTree(p.right, q.right)
}


// Test case 1: Identical trees
let p = createTree([1, 2, 3]);
let q = createTree([1, 2, 3]);
console.log(isSameTree(p, q)); // Output: true

// Test case 2: Different structures
p = createTree([1, 2]);
q = createTree([1, null, 2]);
console.log(isSameTree(p, q)); // Output: false

// Test case 3: Different values
p = createTree([1, 2, 3]);
q = createTree([1, 2, 4]);
console.log(isSameTree(p, q)); // Output: false

// Test case 4: One tree is null
p = createTree([1, 2, 3]);
q = null;
console.log(isSameTree(p, q)); // Output: false

// Test case 5: Both trees are null
p = null;
q = null;
console.log(isSameTree(p, q)); // Output: true

// Test case 6: Larger identical trees
p = createTree([1, 2, 3, 4, 5, 6, 7]);
q = createTree([1, 2, 3, 4, 5, 6, 7]);
console.log(isSameTree(p, q)); // Output: true

// Test case 7: Larger different trees
p = createTree([1, 2, 3, 4, null, 6, 7]);
q = createTree([1, 2, 3, 4, 5, 6, null]);
console.log(isSameTree(p, q)); // Output: false

