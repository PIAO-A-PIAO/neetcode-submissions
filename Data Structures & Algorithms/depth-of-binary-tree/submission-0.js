/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        let result = 0
        if (!root) return 0
        const search = (node, depth) => {
            result = Math.max(depth, result)
            if (node.left) search(node.left, depth + 1)
            if (node.right) search(node.right, depth + 1)
        }
        search(root, 1)
        return result
    }
}
