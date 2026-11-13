class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) return this.findMedianSortedArrays(nums2, nums1)

        const m = nums1.length
        const n = nums2.length
        const half = Math.floor((m + n) / 2)

        let left = 0
        let right = m

        while (left <= right) {
            const i = Math.floor((left + right) / 2)
            const j = half - i

            const l1 = i == 0 ? -Infinity : nums1[i-1]
            const r1 = i == m ? Infinity : nums1[i]

            const l2 = j == 0 ? -Infinity : nums2[j - 1]
            const r2 = j == n ? Infinity : nums2[j]

            if (l1 <= r2 && l2 <= r1) {
                if ((m + n) % 2 == 1) {
                    return Math.min(r1, r2)
                } else {
                    return (Math.max(l1, l2) + Math.min(r1, r2)) / 2
                }
            }

            if (l1 > r2) {
                right = i-1
            } else {
                left = i+1
            }
        }


    }
}
