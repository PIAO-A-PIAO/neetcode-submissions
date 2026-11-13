class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore[key]) this.keyStore[key].push([value, timestamp])
        else this.keyStore[key] = [[value, timestamp]]
        // console.log(this.keyStore)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore[key]
        if (!arr) return ""

        let left = 0
        let right = arr.length - 1

        while (left < right - 1) {
            const mid = Math.floor((left + right) / 2)
            if (arr[mid][1] == timestamp) return arr[mid][0]
            else if (arr[mid][1] < timestamp) left = mid
            else right = mid
        }

        if (arr[right][1] <= timestamp) return arr[right][0]
        else if (arr[left][1] <= timestamp) return arr[left][0]
        return ""
    }
}
