class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const canReach = Array.from({length: nums.length}, () => {return false})
        for (let i = 0; i<nums.length; i++) {
            if (i == 0) {
                canReach[0] = true
            }
            if (canReach[i] == true) {
                for (let j = 0; j <=nums[i]; j++) {
                    canReach[i + j] = true
                }
            }
        }
        console.log(canReach)
        return canReach.at(-1)
    }
}
