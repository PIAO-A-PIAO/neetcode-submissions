class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left < right - 1) {
            const mid = Math.floor((right + left) / 2)
            if (nums[right] > nums[left]) {
                right = mid - 1
            } else if (nums[mid] > nums[left]) {
                left = mid
            } else {
                right = mid
            }
        }
        const min = nums.indexOf(Math.min(nums[left], nums[right]))

        if (target <= nums.at(-1)) {
            left = min
            right = nums.length - 1
        } else {
            left = 0
            right = min - 1
        }
        console.log(left, right)

        while (left < right) {
            const mid = Math.floor((right + left) / 2)
            if (nums[mid] == target) return mid
            else if (nums[mid] < target) left = mid + 1
            else right = mid - 1
        }
        return target == nums[left] ? left : -1
    }
}
