/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null
        const parsed = {} //index: node

        const createNode = (a) => {
            if (!parsed[a]) {
                parsed[a] = new Node(a)
            }
        }
        const updateNeighbors = (a, b) => {
            parsed[a].neighbors.push(parsed[b])
            parsed[b].neighbors.push(parsed[a])
        }

        const parse = (node) => {
            createNode(node.val)
            for (const neighbor of node.neighbors) {
                if (parsed[neighbor.val]?.neighbors.includes(parsed[node.val])) {
                    continue
                }
                createNode(neighbor.val)
                updateNeighbors(node.val, neighbor.val)
                parse(neighbor)
            }
            return parsed[node.val]
        }

        return parse(node)
    }
}
