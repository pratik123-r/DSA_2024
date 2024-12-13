
class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

let list = new Node(1)
list.next = new Node(2)
list.next.next = new Node(2)
list.next.next.next = new Node(0)
list.next.next.next.next = new Node(1)

function sort(head) {
    let zeroHead = new Node(-1)
    let oneHead = new Node(-1)
    let twoHead = new Node(-1)

    let zero = zeroHead;
    let one = oneHead;
    let two = twoHead;

    let temp = head;

    while (temp) {

        if (temp.val == 0) {
            zero.next = temp;
            zero = zero.next
        } else if (temp.val == 1) {
            one.next = temp;
            one = one.next
        } else {
            two.next = temp;
            two = two.next
        }

        temp = temp.next
    }

    zero.next = oneHead.next ? oneHead.next : twoHead.next;
    one.next = twoHead.next
    two.next = null

    return zeroHead.next


}


console.log(JSON.stringify(sort(list)));