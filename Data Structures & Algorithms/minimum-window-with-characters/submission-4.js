class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tChars = {}
        for (const char of t) {
            tChars[char] = (tChars[char] ?? 0) + 1
        }

        const found = {}
        const need = Object.keys(tChars).length
        let have = 0
        let left = 0

        let resLeft = -1
        let resLength = Infinity

        for (let right = 0; right < s.length; right ++) {
            found[s[right]] = (found[s[right]] ?? 0) + 1

            if (found[s[right]] == tChars[s[right]]) {
                have ++
            }

            if (have < need) {
                continue
            } else {
                console.log("found", s.slice(left, right + 1))
                while (have == need) {
                    if (found[s[left]]) {
                        found[s[left]] --
                        if (found[s[left]] < tChars[s[left]]) {
                            have --
                            if (resLength > right - left + 1) {
                                resLeft = left
                                resLength = right - left + 1
                            }
                        }
                        left ++
                    } else {
                        left ++
                    }
                }
            }
        }
        return resLeft == -1 ? "" : s.slice(resLeft, resLeft + resLength)
    }
}