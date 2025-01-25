/**
 * https://leetcode.com/problems/rotate-list/description/
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


var rotateRight = function(head, k) {
    let listLen =  findLen(head, k)
    let firstHead =  head;
    let secondHead;
    let curr = head
      let count = listLen -( k % listLen)
    while (count > 1) {
      curr = curr.next
      count--
    }
    secondHead = curr.next
    curr.next = null
    let firstroot = reverseRecursive(firstHead)
    let secondroot = reverseRecursive(secondHead)
    firstHead.next = secondroot
    return reverseRecursive(firstroot)
    
};


function findLen(head) {
    let count = 0
    while (head) {
        head = head.next
        count++
    }
    return count
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

console.log(JSON.stringify(rotateRight(list, 2)));

