
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        console.log(strs.map(str => `${str.length}>${str}`).join(""))
        return strs.map(str => `${str.length}>${str}`).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        let j = 0
        const result = []
        while (j < str.length) {
            if (str[j] != ">") j++
            else {
                const length = Number(str.slice(i, j))
                console.log(length)
                result.push(str.slice(j+1, j+length+1))
                i = j + length + 1
                j = i + 1
            }
        }
        return result
    }
}
