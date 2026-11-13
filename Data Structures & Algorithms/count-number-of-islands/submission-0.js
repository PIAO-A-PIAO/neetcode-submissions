class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const mutableGrid = [...grid]
        const sink = (i, j) => {
            if (!mutableGrid[i] || !mutableGrid[i][j] || mutableGrid[i][j] == "0") return
            else {
                mutableGrid[i][j] = "0"
                sink(i, j-1)
                sink(i, j+1)
                sink(i-1, j)
                sink(i+1, j)
            }
        }
        let count = 0
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (mutableGrid[i][j] == "1") {
                    count++
                    sink(i, j)
                }
            }
        }
        return count
    }
}
