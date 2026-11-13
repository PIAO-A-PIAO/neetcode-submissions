class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const queue = []
        const result = []
        for (let i = 0; i<nums.length; i++) {
            while (queue.length > 0 && nums[i] > nums[queue.at(-1)]) {
                queue.pop()
            }
            queue.push(i)
            if (queue[0] < i - k + 1) {
                queue.shift()
            }
            if (i >= k - 1) {
                result.push(nums[queue[0]])
            }
        }
        return result
    }
}
