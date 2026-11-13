class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const dp = Array.from({length: nums.length}, () => 0)
        
        for (let i = 0; i < nums.length; i++) {
            const option1 = dp[i - 3] ?? 0
            const option2 = dp[i - 2] ?? 0
            dp[i] = Math.max(option1, option2) + nums[i]
        }
        return Math.max(...dp)
    }
}
