class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left < right) {
            const mid = Math.floor((right + left) / 2)
            const midVal = nums[mid]
            if (midVal == target) {
                return mid
            } else if (midVal < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return nums[left] == target ? left : -1
    }
}
