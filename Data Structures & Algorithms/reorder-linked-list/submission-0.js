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
     * @return {void}
     */
    reorderList(head) {
        const vals = []
        let curr = head
        while (curr) {
            vals.push(curr.val)
            curr = curr.next
        }
        curr = head.next
        let i = 1
        while (i <vals.length && curr) {
            if (i % 2 == 0) {
                curr.val = vals[i / 2]
            } else {
                curr.val = vals[vals.length - (i+1)/2]
            }
            console.log(curr.val)
            curr = curr.next
            i++
        }
        
    }
}
