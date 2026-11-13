class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {}
        for (const num of nums) {
            if (!isNaN(freq[num])) freq[num] += 1
            else freq[num] = 1
        }
        const rank = Array.from({length: nums.length}, () => [])
        Object.keys(freq).map(key => {
            rank[freq[key] - 1].push(key)
        })
        
        const result = []
        let index = nums.length - 1
        while (result.length < k) {
            if (rank[index].length == 0) {
                index --
            } else {
                result.push(...rank[index])
                index --
            }
        }
        return result
    }
}
