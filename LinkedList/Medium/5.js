/**
 * Segregate even and odd nodes in LinkedList
 * 
    Input: head = [1,2,3,4,5]
    Output: [1,3,5,2,4]

    Input: head = [2,1,3,5,6,4,7]
    Output: [2,3,6,7,1,5,4] 
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

// brute force
const segregate = function (head) {
    if (!head || !head.next)
        return head
    let oddStart;
    let oddEnd;
    let evenStart;
    let evenEnd;
    let count = 0
    while (head) {
        if (count % 2 == 0) {
            if (!evenStart) {
                evenStart = new Node(head.data);
                evenEnd = evenStart;
            } else {
                evenEnd.next = new Node(head.data);
                evenEnd = evenEnd.next
            }
        } else {
            if (!oddStart) {
                oddStart = new Node(head.data);
                oddEnd = oddStart;
            } else {
                oddEnd.next = new Node(head.data);
                oddEnd = oddEnd.next
            }
        }
        head = head.next
        count++;
    }
    if (evenStart) {
        evenEnd.next = oddStart;
        return evenStart;
    }
    return oddStart

}

const optimalSegregate = (head) => {
    let odd = head
    let even = head.next;
    let temp = even;
    while (even && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = temp
    return head
}

console.log(JSON.stringify(segregate(list)));
console.log(JSON.stringify(optimalSegregate(list)));

