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
     * @return {boolean}
     */
    isBalanced(root) {
        const height = (node) => {
            if (!node) {
                return 0
            }
            if (!node.left && !node.right) {
                return 1
            }
            const lh = height(node.left)
            const rh = height(node.right)
            console.log(lh, rh)
            if (lh == NaN || rh == NaN) return NaN
            if (Math.abs(lh- rh) <= 1) {
                return 1+ Math.max(lh, rh)
            } else {
                return NaN
            }
        }

        const balanced = height(root)
        return (!isNaN(balanced))
    }
}
