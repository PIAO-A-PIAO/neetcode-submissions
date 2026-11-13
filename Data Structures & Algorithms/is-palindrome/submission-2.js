class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphanumeric = (char) => {
            return /^[0-9a-zA-Z]$/.test(char)
        }
        let left = 0
        let right = s.length - 1
        while (left < right) {
            while (!isAlphanumeric(s[left]) && left < right) {left ++}
            while (!isAlphanumeric(s[right]) && right > left) {right --}
            if (s[left].toLowerCase() == s[right].toLowerCase()) {
                left ++
                right --
            } else {console.log(s[left], s[right]); return false}
        }
        return true
    }
}