class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const appear = {}
        for (const char of s1) {
            appear[char] = 1 + (appear[char] ?? 0)
        }

        let right = 0

        for (let left=0; left < s2.length; left++) {
            if (isNaN(appear[s2[left]])) {
                continue
            } else {
                if (right > left) {
                    appear[s2[left]] += 1
                    console.log("refill", appear)
                    while (appear[s2[right]]) {
                        appear[s2[right]] -= 1
                        right ++
                    }
                    console.log("checked", appear)
                    if (Math.max(...Object.values(appear)) == 0) return true
                } else {
                    console.log(s2[left], appear[s2[left]])
                    right = left
                    while (appear[s2[right]]) {
                        appear[s2[right]] -= 1
                        right ++
                    }
                    console.log("checked", appear)

                    if (Math.max(...Object.values(appear)) == 0) return true
                    left --
                }
            }
        }
        return false
    }
}
