class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = [...stones]

        const shiftDown = (i) => {
            while (true) {
                const left = i * 2 + 1
                const right = i * 2 + 2
                let largest = i

                if (
                    left < heap.length &&
                    heap[left] > heap[largest]
                ) {
                    largest = left
                }

                if (
                    right < heap.length &&
                    heap[right] > heap[largest]
                ) {
                    largest = right
                }

                if (largest === i) break

                ;[heap[i], heap[largest]] =
                    [heap[largest], heap[i]]

                i = largest
            }
        }

        const init = () => {
            for (
                let i = Math.floor(heap.length / 2) - 1;
                i >= 0;
                i--
            ) {
                shiftDown(i)
            }
        }

        const pop = () => {
            if (heap.length === 1) {
                return heap.pop()
            }

            const max = heap[0]

            heap[0] = heap.pop()
            shiftDown(0)

            return max
        }

        const insert = (val) => {
            heap.push(val)

            let i = heap.length - 1

            while (i > 0) {
                const parent = Math.floor((i - 1) / 2)

                if (heap[parent] >= heap[i]) break

                ;[heap[parent], heap[i]] =
                    [heap[i], heap[parent]]

                i = parent
            }
        }

        init()

        while (heap.length > 1) {
            const x = pop()
            const y = pop()

            if (x !== y) {
                insert(x - y)
            }
        }

        return heap[0] ?? 0
    }
}