/**
 * You are given a linked list where each element in the list is a node and have an integer data. 
 * You need to add 1 to the number formed by concatinating all the list node numbers
 * together and return the head of the modified linked list
 */

class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

let list = new Node(1)
list.next = new Node(2)
list.next.next = new Node(3)
list.next.next.next = new Node(4)
list.next.next.next.next = new Node(5)

function reverse(head) {
    let prev = null;
    let curr = head;
    let next = head.next;
    while (next) {
        curr.next = prev;
        prev = curr
        curr = next
        next = next.next
    }
    curr.next = prev
    
    return curr
}

function add(head) {
    head = reverse(head);
    let temp = head;
    let carry = 1
    while (temp) {
        if (temp.data + carry > 9) {
            temp.data = 0
            carry = 1;
        } else {
            temp.data = temp.data + carry
            carry = 0
        }
        if (!carry)
            break;
        temp = temp.next;
    }
    head = reverse(head);

    if (carry) {
        let dummy = new Node(1);
        dummy.next = head
        head = dummy
    }
    return head
}

console.log(JSON.stringify(reverse(list)));



