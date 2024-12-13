/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
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

var reverseList = function(head) {
   let prev = new Node(head.data);
   let curr = head;
   let next = curr.next;
   while (next!=null) {
    curr = next;
    next = next.next
    curr.next = prev;
    prev = curr;
   }
   return prev;

};

function reverseRecursive(head) {
    if (head === null || head.next === null) {
        return head;
    }
    const newHead = reverseRecursive(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}


console.log(JSON.stringify(reverseList(list)));