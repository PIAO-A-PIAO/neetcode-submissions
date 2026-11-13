class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [[temperatures[0], 0]]
        const result = Array.from({length: temperatures.length}, ()=>0)
        for (let i = 1; i<temperatures.length; i++) {
            while(stack.length > 0 && temperatures[i] > (stack.at(-1))[0]) {
                const poped = stack.pop()
                result[poped[1]] = i - poped[1]
            }
            stack.push([temperatures[i], i])
        }
        return result
    }
}
