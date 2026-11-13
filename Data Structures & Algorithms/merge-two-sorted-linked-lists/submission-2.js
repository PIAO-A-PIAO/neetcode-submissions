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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const result = new ListNode()
        let curr1 = list1
        let curr2 = list2
        let curr = result

        while (curr1 || curr2) {
            // console.log(curr1?.val ?? Infinity, curr2?.val ?? Infinity)
            if ((curr1?.val ?? Infinity) <= (curr2?.val ?? Infinity)) {
                curr.next = new ListNode(curr1?.val)
                curr1 = curr1.next
            } else {
                curr.next = new ListNode(curr2?.val)
                curr2 = curr2.next
            }
            curr = curr.next
        }
        return result.next
    }
}
