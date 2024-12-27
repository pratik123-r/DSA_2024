/**
 * Merge k Sorted Lists
 * https://leetcode.com/problems/merge-k-sorted-lists/description/

    Input: lists = [[1,4,5],[1,3,4],[2,6]]
    Output: [1,1,2,3,4,4,5,6]
    Explanation: The linked-lists are:
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    merging them into one sorted list:
    1->1->2->3->4->4->5->6
 */


class Solution {
    mergeKLists(lists) {
        if (!lists || lists.length === 0) {
            return null;
        }

        while (lists.length > 1) {
            let temp = [];
            for (let i = 0; i < lists.length; i += 2) {
                let l1 = lists[i];
                let l2 = i + 1 < lists.length ? lists[i + 1] : null;
                temp.push(this.mergeLists(l1, l2));
            }
            lists = temp;
        }

        return lists[0];
    };

    mergeLists(l1, l2) {
        let node = new ListNode();
        let ans = node;

        while (l1 && l2) {
            if (l1.val > l2.val) {
                node.next = l2;
                l2 = l2.next;
            } else {
                node.next = l1;
                l1 = l1.next;
            }
            node = node.next;
        }

        node.next = l1 ? l1 : l2;
        return ans.next;
    }
}

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}



// Helper function to create a linked list from an array
function createList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Example usage:
let list1 = createList([1, 4, 5]);
let list2 = createList([1, 3, 4]);
let list3 = createList([2, 6]);

let lists = [list1, list2, list3];

let solution = new Solution();
let mergedList = solution.mergeKLists(lists);

// Print the merged list
while (mergedList !== null) {
    console.log(mergedList.val);
    mergedList = mergedList.next;
}
