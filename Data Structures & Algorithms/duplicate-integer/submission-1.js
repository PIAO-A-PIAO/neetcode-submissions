class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dup = {}
        for (const num of nums) {
            if (!isNaN(dup[num])) return true
            dup[num] = 1
        }
        return false
    }
}

