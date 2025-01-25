/**
 * https://takeuforward.org/data-structure/reverse-linked-list-in-groups-of-size-k/
 * 
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
let list = new Node(1)
list.next = new Node(2)
list.next.next = new Node(3)
list.next.next.next = new Node(4)
list.next.next.next.next = new Node(5)


var reverseKGroup = function (head, k) {
    let root;

    let kthnode = findKthNode(head, k)

    if (!kthnode)
        return head

    let curr = head

    while (true) {
        let next = kthnode.next
        kthnode.next = null;

        let newHead = reverseRecursive(curr)
        if (!root)
            root = newHead

        kthnode = findKthNode(next, k)
        if (!kthnode) {
            curr.next = next
            break
        }

        curr.next = kthnode
        curr = next

    }




    return root

};

function findKthNode(head, k) {
    let count = 0
    while (head && count < k - 1) {
        head = head.next
        count++
    }
    return head;
}


function reverseRecursive(head) {
    if (head === null || head.next === null) {
        return head;
    }
    const newHead = reverseRecursive(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}





console.log(JSON.stringify(reverseKGroup(list, 2)));
