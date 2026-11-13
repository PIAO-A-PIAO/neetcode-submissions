class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];
        let i = 0;
        const n = intervals.length;

        // 1. Add all intervals that come completely before newInterval
        while (i < n && intervals[i][1] < newInterval[0]) {
            result.push(intervals[i]);
            i++;
        }

        // 2. Merge all overlapping intervals with newInterval
        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
        result.push(newInterval);

        // 3. Add all remaining intervals that come after newInterval
        while (i < n) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}
