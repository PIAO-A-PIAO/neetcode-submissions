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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const result = []

        const parse = (node) => {
            if (!node) return
            parse(node.left)
            result.push(node.val)
            parse(node.right)
        }
        parse(root)
        return result[k - 1]
    }
}
