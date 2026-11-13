class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let max = 0

        while (left < right) {
            const hLeft = heights[left]
            const hRight = heights[right]

            max = Math.max(Math.min(hLeft, hRight) * (right - left), max)
            if (hLeft <= hRight) {
                while (left < right) {
                    if (heights[left] <= hLeft) left ++
                    else break
                }
            } else {
                while (left < right) {
                    if (heights[right] <= hRight) right --
                    else break
                }
            }
        }
        return max
    }
}
