/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit. 
 * Add the two numbers and return the sum as a linked list.

    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.
    Example 2:

    Input: l1 = [0], l2 = [0]
    Output: [0]
    Example 3:

    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]
 */


class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

function addTwoNumber(list1, list2) {
    let head = new Node(-1);
    let temp = head;
    let carry = 0
    while (list1 || list2) {
        let sum = 0
        if (list1)
            sum += list1.val
        if (list2)
            sum += list2.val

        sum += carry;
        carry = Math.floor(sum / 10);
        temp = new Node(sum % 10);
        if (list1) list1 = list1.next;
        if (list2) list2 = list2.next
        temp = temp.next
    }
    if (carry) {
        temp.next = new ListNode(carry);
    }
    return head.next
}


