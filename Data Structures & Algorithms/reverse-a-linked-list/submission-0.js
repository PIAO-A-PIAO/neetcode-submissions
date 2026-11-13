/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        const stack = []
        while (head) {
            stack.push(head.val)
            head = head.next
        }

        if (stack.length == 0) return null
        const result = new ListNode(stack.pop())
        let curr = result
        while (stack.length > 0) {
            curr.next = new ListNode(stack.pop())
            curr = curr.next
        }

        return result
    }
}
