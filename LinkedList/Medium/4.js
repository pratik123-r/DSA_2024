/**
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
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
list.next.next.next = new Node(2)
list.next.next.next.next = new Node(1)

const reverse = function (head) {
    let prev = new Node(head.data);
    let curr = head;
    let next = head.next;
    while (next) {
        curr = next;
        next = next.next;
        curr.next = prev;
        prev = curr;
    }
    return prev;
}

const isPalindrome = function (head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let rev = reverse(slow.next);
    while (rev) {
        if(rev.data != head.data)
            return false;
        rev = rev.next;
        head = head.next
    }
    return true;
}

console.log(isPalindrome(list));



