class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length < 2) return s.length
        const indices = {}
        let result = 0
        let left = 0
        let right = 0
        
        while (right < s.length) {
            if (!isNaN(indices[s[right]]) && indices[s[right]] >= left) {
                // console.log(s.slice(left, right))
                result = Math.max(result, right - left)
                left = indices[s[right]] + 1
            }
            indices[s[right]] = right
            right ++
        }
        result = Math.max(result, right - left)

        return result
    }
}
