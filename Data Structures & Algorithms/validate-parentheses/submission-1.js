class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const left = ["(", "[", "{"]
        const right = [")", "]", "}"]

        for (const char of s) {
            if (left.includes(char)) {
                stack.push(char)
            } else {
                if (left.indexOf(stack.pop()) !== right.indexOf(char)) {
                    return false
                }
            }
        }
        return stack.length == 0
    }
}
