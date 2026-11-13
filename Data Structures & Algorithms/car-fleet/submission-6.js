class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        const grouped = []
        for (let i =0; i<position.length; i++) {
            grouped.push([position[i], speed[i]])
        }
        grouped.sort((a, b) => b[0]-a[0])
        
        let result = 0
        let prevTime = -Infinity
        for (const [pos, spd] of grouped) {
            const time = (target - pos) / spd
            if (time > prevTime) {
                result ++
                prevTime = time
            }
        }
        return result
    }
}
