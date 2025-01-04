function LCA(root, p, q) {
    // Base case: if the root is null, return null
    if (!root) return null;

    // If both p and q are smaller than root, the LCA must be in the left subtree
    if (p.val < root.val && q.val < root.val) {
        return LCA(root.left, p, q);
    }

    // If both p and q are greater than root, the LCA must be in the right subtree
    if (p.val > root.val && q.val > root.val) {
        return LCA(root.right, p, q);
    }

    // If p and q lie on opposite sides, or one is equal to root, root is the LCA
    return root;
}
