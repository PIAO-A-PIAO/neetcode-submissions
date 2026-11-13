class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftProduct = []
        const rightProduct = []

        for (let i=0; i<nums.length; i++) {
            const j = nums.length - i - 1
            if (i == 0) {
                leftProduct.push(nums[i])
                rightProduct.push(nums[j])
            } else {
                leftProduct.push(leftProduct.at(-1) * nums[i])
                rightProduct.push(rightProduct.at(-1) * nums[j])
            }
        }
        
        const result = []
        for (let k=0; k<nums.length; k++) {
            const left = leftProduct[k-1] ?? 1
            const right = rightProduct[nums.length - k - 2] ?? 1
            result.push(left * right)
        }
        return result
    }
}
