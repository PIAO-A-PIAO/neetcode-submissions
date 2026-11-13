class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min = Math.ceil(piles.reduce((prev, curr) => prev + curr, 0) / h)
        let max = Math.max(...piles)
        let mid = Math.floor((min + max) / 2)

        while (min <= max) {
            let sum = 0
            for (const pile of piles) {
                sum += Math.ceil(pile / mid)
            }
            if (sum > h) {
                min = mid + 1
                mid = Math.floor((min + max) / 2)
            } else {
                max = mid - 1
                mid = Math.floor((min + max) / 2)
            }
        }
        return min
    }
}
