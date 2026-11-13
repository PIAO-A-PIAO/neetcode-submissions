class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let curr = n
        let count = 0
        while (curr > 0) {
            if (curr % 2 == 0) {
                curr = curr / 2
            } else {
                count ++
                curr = (curr - 1) / 2
            }
        }
        return count
    }
}
