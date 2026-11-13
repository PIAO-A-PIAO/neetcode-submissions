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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const allStarts = []
        const checkStart = (node, target) => {
            if (!node) return
            if (node.val == target) {
                allStarts.push(node)
            }
            checkStart(node.left, target)
            checkStart(node.right, target)
        }

        checkStart(root, subRoot.val)
        console.log(allStarts)
        const compare = (node, target) => {
            if (!node && target || node && !target) {
                return false
            }
            if (!node && !target) {
                return true
            }
            if (node?.val !== target?.val) {
                return false
            }
            return compare(node?.left, target?.left) && compare(node?.right, target?.right)
        }
        
        for (const start of allStarts) {
            if (compare(start, subRoot)) return true
        }
        return false
    } 
}
