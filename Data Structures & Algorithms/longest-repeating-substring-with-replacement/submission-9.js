class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0
        let maxFreq = 0
        let result = 0
        const freq = {}

        for (let right = 0; right < s.length; right++) {
            const char = s.charAt(right)
            freq[char] = (freq[char] ?? 0) + 1

            maxFreq = Math.max(maxFreq, freq[char])
            while (right - left + 1 - maxFreq > k) {
                freq[s.charAt(left)] --
                left ++
            }
            result = Math.max(result, right - left + 1)
        }
        return result
    }
}
