class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sets = new Set(nums);
        let result = 0;
        for (const num of nums) {
            if (sets.has(num - 1)) continue

            let curr = num
            let length = 1
            while (sets.has(curr + 1)) {
                curr ++
                length ++
            }
            result = Math.max(result, length)
        }
        return result
    }
}