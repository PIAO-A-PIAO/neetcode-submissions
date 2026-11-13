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
    diameterOfBinaryTree(root) {
        let max = 0
        const prone = (node) => {
            if (!node) return 0
            if (!node.left && !node.right) {
                console.log(node.val, 1)
                return 1
            }
            const dl = prone(node.left)
            const dr = prone(node.right)
            max = Math.max(max, dl+dr)
            console.log(node.val, Math.max(dl, dr) + 1)
            return Math.max(dl, dr) + 1
        }
        prone(root)
        return max
    }
}
