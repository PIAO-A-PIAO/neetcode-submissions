class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let ans = 0;

        for (const num of set) {
            // num 不是连续序列起点
            if (set.has(num - 1)) {
                continue;
            }

            // num 是起点
            let cur = num;
            let length = 1;

            while (set.has(cur + 1)) {
                cur++;
                length++;
            }

            ans = Math.max(ans, length);
        }

        return ans;
    }
}