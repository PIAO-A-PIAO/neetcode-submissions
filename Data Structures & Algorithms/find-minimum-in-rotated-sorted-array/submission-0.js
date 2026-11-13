class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length - 1

        while (left < right - 1) {
            console.log(left, right)
            const mid = Math.floor((right + left) / 2)
            if (nums[left] < nums[right]) {
                right = mid - 1
            } else {
                if (nums[mid] > nums[left]) {
                    left = mid
                } else {
                    right = mid
                }
            }
        }
        return Math.min(nums[left], nums[right])
    }
}
