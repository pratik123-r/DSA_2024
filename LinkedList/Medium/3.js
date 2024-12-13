/**
 * Detect a Cycle in a Linked List
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
list.next.next.next.next = list

var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast)
            return true
    }
    return false;
};

var returnStartingPoint = function(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast)
            break;
    }
    if (!fast || !fast.next) {
        return null;
    }

    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast
}

var findTheLengthOfLoop = function (head) {
    let fast = head;
    let slow = head;
  
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast)
            break;
    }
    if (!fast || !fast.next) {
        return null;
    }

    let ctn = 1;
    slow = slow.next
    while (slow !== fast) {
        slow = slow.next;
        ctn++
    }
    return ctn
}

console.log(returnStartingPoint(list));

console.log(detectCycle(list));