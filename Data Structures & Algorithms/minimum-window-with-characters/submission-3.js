class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return ""

        const need = {}
        for (const char of t) {
            need[char] = (need[char] ?? 0) + 1
        }

        const window = {}

        let have = 0
        const needCount = Object.keys(need).length

        let left = 0
        let bestStart = 0
        let bestLength = Infinity

        for (let right = 0; right < s.length; right++) {
            const char = s[right]

            if (need[char] !== undefined) {
                window[char] = (window[char] ?? 0) + 1

                // 这个字符的数量刚好达到要求
                if (window[char] === need[char]) {
                    have++
                }
            }

            // 当前窗口已经包含 t 的所有字符和数量
            while (have === needCount) {
                const length = right - left + 1

                if (length < bestLength) {
                    bestLength = length
                    bestStart = left
                }

                const leftChar = s[left]

                if (need[leftChar] !== undefined) {
                    // 如果删掉这个字符会让窗口不再满足要求
                    if (window[leftChar] === need[leftChar]) {
                        have--
                    }

                    window[leftChar]--
                }

                left++
            }
        }

        return bestLength === Infinity
            ? ""
            : s.slice(bestStart, bestStart + bestLength)
    }
}