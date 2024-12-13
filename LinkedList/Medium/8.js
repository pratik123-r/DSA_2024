/**
 * sort linked list
 */

 class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

let list = new Node(5)
list.next = new Node(4)
list.next.next = new Node(3)
list.next.next.next = new Node(2)
list.next.next.next.next = new Node(1)

function merge(left, right) {
    let start = new Node(-1);
    let curr = start
    while (left && right) {
        if(left.val > right.val) {
            curr.next = right;
            right = right.next;
        }else {
            curr.next = left;
            left = left.next;
        }
        curr = curr.next
    }
    while (left) {
        curr.next = left;
        left = left.next; 
        curr = curr.next
    }
    while (right) {
        curr.next = right;
        right = right.next;
        curr = curr.next
    }
    return start.next
}

function middle(head) {
    let fast = head;
    let slow = head;
    let temp
    while (fast && fast.next) {
        temp = slow
        slow = slow.next;
        fast = fast.next.next;
    }
    temp.next = null;
    return {l: head, r: slow};
}

function mergeSort(head) {
    if(!head || !head.next)
            return head;
    let {l, r} = middle(head);
    
    let left = mergeSort(l);
    let right = mergeSort(r);
    let ans = merge(left, right)
    return ans
}

console.log(JSON.stringify(mergeSort(list)));

