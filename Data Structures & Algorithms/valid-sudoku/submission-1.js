class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const valid = {}
        for (let i=0; i<9; i++) {
            for (let j=0; j<9; j++) {
                const num = Number(board[i][j])
                if (isNaN(num)) continue

                const gkey = `g${Math.floor(i/3)}${Math.floor(j/3)}` 
                const rkey = `r${i}` 
                const ckey = `c${j}`
                console.log(gkey, rkey, ckey)
                for (const key of [gkey, rkey, ckey]) {
                    if (!valid[key]) {
                        valid[key] = Array.from({length: 9}, () => 0)
                        valid[key][Number(num) - 1] += 1
                    } else if (valid[key][Number(num) - 1] > 0) {
                        return false
                    } else {
                        valid[key][Number(num) - 1] += 1
                    }
                }
            }
        }
        return true
    }
}
