class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = []
        this.k = k
        this.heapify = (minHeap, pId) => {
            const lId = pId * 2 + 1
            const rId = pId * 2 + 2
            const l = minHeap[lId] ?? Infinity
            const r = minHeap[rId] ?? Infinity
            let switchedWith = ""
            if (l >= r) {
                if (minHeap[pId] > r) {
                    switchedWith = "r";
                    [minHeap[pId], minHeap[rId]] = [minHeap[rId], minHeap[pId]]
                }
            } else {
                if (minHeap[pId] > l) {
                    switchedWith = "l";
                    [minHeap[pId], minHeap[lId]] = [minHeap[lId], minHeap[pId]]
                }
            }
            return switchedWith
        }

        this.insert = (minHeap, val) => {
            minHeap.push(val)
            let pId = Math.floor((minHeap.length - 2) / 2)
            while (pId >= 0) {
                this.heapify(minHeap, pId)
                pId = Math.floor((pId - 1) / 2)
            }
            // console.log(minHeap)
        }

        this.pop = (minHeap) => {
            if (minHeap.length <= 1) {
                this.minHeap = []
                return
            }
            minHeap[0] = minHeap.pop()

            let pId = 0
            while (pId <= Math.floor((minHeap.length - 2) / 2)) {
                const switchedWith = this.heapify(minHeap, pId)
                console.log(this.minHeap)
                if (switchedWith == "l") {
                    pId = pId * 2 + 1
                } else if (switchedWith == "r") {
                    pId = pId * 2 + 2
                } else {
                    break
                }
            }
            // console.log(minHeap)
        }

        for (const num of nums) {
            if (this.minHeap.length == k) {
                if (this.minHeap[0] < num) {
                    this.pop(this.minHeap)
                    this.insert(this.minHeap, num)
                }
            } else {
                this.insert(this.minHeap, num)
            }
        }
        console.log(this.minHeap)
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.minHeap.length == this.k) {
            if (this.minHeap[0] < val) {
                this.pop(this.minHeap)
                console.log(this.minHeap)
                this.insert(this.minHeap, val)
            }
        } else {
            this.insert(this.minHeap, val)
        }
        console.log(this.minHeap)
        return this.minHeap[0]
    }
}
