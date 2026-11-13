class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const combination = (n, r) => {
            if (r == 0 || n == r) {
                console.log(n, r, 1)
                return 1
            }
            let i = n
            let result = 1
            while (i > (n - r)) {
                result *= i
                i--
            }
            i = r
            while (i >= 1) {
                result = result / i
                i--
            }
            console.log(n, r, result)
            return result
        }

        const maxTwo = Math.floor(n / 2)
        let result = 0
        let i = 0
        while (i <= maxTwo) {
            const steps = n - i
            result += combination(steps, i)
            i++
        }
        return result
    }


}
