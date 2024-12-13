/**
 * Remove Nth Node From End of List
 * 
    Input: head = [1,2,3,4,5], n = 2
    Output: [1,2,3,5]

    Input: head = [1], n = 1
    Output: []

    Input: head = [1,2], n = 1
    Output: [1]
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


var removeNthFromEnd = function (head, n) {
    let fast = head;
    let slow = head;
    for (let index = 0; index <= n; index++) {
        fast = fast.next
    }
    if (!fast)
        return head.next

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next
    return head
};

console.log(JSON.stringify(removeNthFromEnd(list, 3)));