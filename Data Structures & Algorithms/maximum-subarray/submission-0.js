class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = -Infinity
        let maxTillI = 0
        for (const num of nums) {
            maxTillI = Math.max(maxTillI + num, num)
            max = Math.max(max, maxTillI)
        }
        return max
    }
}
