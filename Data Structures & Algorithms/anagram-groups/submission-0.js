class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const dup = {}
        for (const str of strs) {
            const sorted = str.split("").sort().join("")
            if (dup[sorted]) dup[sorted].push(str)
            else dup[sorted] = [str]
        }
        return Object.values(dup)
    }
}