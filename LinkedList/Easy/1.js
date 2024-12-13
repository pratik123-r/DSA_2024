/**
 * Problem Statement:  Given a linked list and an integer value val, insert a new node with that value at the 
 * beginning (before the head) of the list and return the updated linked list.
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


const insertNodeAtEnd = (list, data) => {
    let temp = list;
    while (temp.next != null) {
        temp = temp.next
    }
    temp.next = new Node(data)
}

const deleteNode = (head, data) => {
    let temp = head;
    while (temp.next != null && temp.next.data != data) {
        temp = temp.next
    }
    temp.next = temp.next.next
}

let list = new Node(1)
list.next = new Node(2)

insertNodeAtEnd(list, 3)
deleteNode(list, 2)

console.log(list);