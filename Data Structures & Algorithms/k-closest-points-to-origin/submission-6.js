class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = []
        const siftUp = (cId) => {
            if (cId === 0) return

            const pId = Math.floor((cId - 1) / 2)
            const p = heap[pId][0]
            const c = heap[cId][0]
            
            if (c > p) {
                [heap[cId], heap[pId]] = [heap[pId], heap[cId]]
                siftUp(pId)
            }
            
            return 
        }
        const insert = (val) => {
            heap.push(val)
            siftUp(heap.length - 1)
        }

        const siftDown = (pId) => {
            const lId = pId * 2 + 1
            const rId = pId * 2 + 2
            const l = (heap[lId] ?? [-Infinity, []])[0]
            const r = (heap[rId] ?? [-Infinity, []])[0]
            const p = heap[pId][0]

            if (l > r) {
                if (p < l) {
                    [heap[pId], heap[lId]] = [heap[lId], heap[pId]]
                    siftDown(lId)
                }
            } else {
                if (p < r) {
                    [heap[pId], heap[rId]] = [heap[rId], heap[pId]]
                    siftDown(rId)
                }
            }
        }
        const pop = () => {
            if (heap.length == 0){
                return
            }
            if (heap.length == 1) {
                heap.pop()
                return
            }
            heap[0] = heap.pop()
            siftDown(0)
            return
        }

        for (const [xi, yi] of points) {
            const distance = xi ** 2 + yi ** 2
            if (heap.length < k) {
                insert([distance, [xi, yi]])
            } else {
                if (distance < heap[0][0]) {
                    pop()
                    insert([distance, [xi, yi]])
                }
            }
        }
        return heap.map((point) => {
            return point[1]
        })
    }
}
