class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const toRight = Array.from({length: heights.length}, ()=>heights.length - 1)
        const toLeft = Array.from({length: heights.length}, ()=>0)
        let stack = []
        let leftStack = []
        heights.map((h, i) => {
            const j = heights.length - 1 - i
            const reversed = heights[j]

            if (stack.length == 0) {
                stack.push([h, i])
                leftStack.push([reversed, j])
            } else {
                while (stack.length > 0 && stack.at(-1)[0] > h) {
                    toRight[stack.pop()[1]] = i - 1
                }
                stack.push([h, i])
                while (leftStack.length > 0 && leftStack.at(-1)[0] > reversed) {
                    toLeft[leftStack.pop()[1]] = j + 1
                }
                leftStack.push([reversed, j])
            }
        })
        
        let max = 0
        
        toRight.map((w, i) => {
            max = Math.max(max, heights[i] * (w - toLeft[i] + 1))
        })
        return max
    }
}
