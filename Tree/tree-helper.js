export class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

// Helper function to create a binary tree from an array
export function createTree(arr) {
    if (!arr || arr.length === 0) return null;
    const nodes = arr.map((val) => (val !== null ? new TreeNode(val) : null));
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] !== null) {
            const leftIndex = 2 * i + 1 
            const rightIndex = 2 * i + 2 
            if (leftIndex < arr.length) {
                nodes[i].left = nodes[leftIndex];
            }

            if (rightIndex < arr.length) {
                nodes[i].right = nodes[rightIndex];
            }
   
        }
    }
    return nodes[0];
}

