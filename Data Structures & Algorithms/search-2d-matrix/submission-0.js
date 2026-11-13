class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0
        let right = matrix.length - 1
        let id = 0
        while (left <= right) {
            id = Math.floor((right + left) / 2)
            if (matrix[id][0] > target) {
                right = id - 1
            } else if (matrix[id].at(-1) < target) {
                left = id + 1
            } else {
                break
            }
        }
        left = 0
        right = matrix[0].length - 1

        while (left <= right) {
            const mid = Math.floor((right + left) / 2)
            const midVal = matrix[id][mid]
            if (midVal == target) {
                return true
            } else if (midVal < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        
        return false
    }
}
