class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {}
        for (let i = 0; i< nums.length; i++) {
            const toFind = target - nums[i]
            if (!isNaN(seen[toFind])) return [seen[toFind], i]
            seen[nums[i]] = i
        }
    }
}
