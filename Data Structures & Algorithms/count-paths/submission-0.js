class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const total = m + n - 2
        // select m-1 from total
        const combination = (total, select) => {
            if (select < total / 2) {
                return combination (total, total - select)
            }
            let result = 1
            for (let i = total; i>select; i--) {
                result *= i
            }
            for (let i = total - select; i > 0; i--) {
                result /= i
            }
            return result
        }
        return combination(total, m - 1)
    }
}
