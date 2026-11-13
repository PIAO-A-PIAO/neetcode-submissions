class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [[]]
        for (const num of nums) {
            const temp = []
            for (const subset of result) {
                temp.push([num, ...subset])
            }
            result.push(...temp)
        }
        return result
    }
}
