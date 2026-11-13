class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const search = (i, target) => {
            if (i >= nums.length || nums[i] > target) return [[]]
            if (nums[i] == target) return [[target]]
    
            let j = i
            const result = []
            while (j < nums.length) {
                const step = search(j, target - nums[i])
                step.map((sol) => {
                    if (sol.length > 0) {
                        result.push([nums[i], ...sol])
                        // console.log(result)
                    }
                })
                j++
            }

            return result

        }
        let i = 0
        let result = []
        while (i < nums.length) {
            result = [...result, ...search(i, target)]
            i++
        }
        return result
        // console.log(search(0, 9))
    }
}
