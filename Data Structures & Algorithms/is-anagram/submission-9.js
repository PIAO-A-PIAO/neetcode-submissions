class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const dup = {}
        for (const char of s) {
            if (!isNaN(dup[char])) dup[char] += 1
            else dup[char] = 1
        }
        for (const char of t){
            if (!isNaN(dup[char])) dup[char] -= 1
            else dup[char] = 1
        }
        return !Boolean((Object.values(dup).filter(val => val != 0)).length)
    }
}
