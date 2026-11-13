class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const sorted = intervals.sort((a, b) => {
            if (a[0] !== b[0]) return a[0] - b[0]
            else return a[1] - b[1]
        })
        const result = []
        let lTemp = sorted[0][0]
        let rTemp = sorted[0][1]
        for (const interval of sorted) {
            const lCurr = interval[0]
            const rCurr = interval[1]

            if (lCurr > rTemp) {
                result.push([lTemp, rTemp])
                lTemp = lCurr
                rTemp = rCurr
                continue
            } else {
                if (rCurr <= rTemp) {
                    continue
                } else {
                    rTemp = rCurr
                    continue
                }
            }
        }
        result.push([lTemp, rTemp])
        return result
    }
}
