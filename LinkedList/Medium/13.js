/**
 * reverse DLL
 */

 class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null
    }
}


let printList = (list) => {
    while (list) {
        console.log(list.data);
        list = list.next
    }
}


let convertToDLL = (arr)=> {
    if (arr.length === 0) return null; 
    let head = new Node(arr[0])
    let curr = head
    for (let i = 1; i < arr.length; i++) {
            let node =  new Node(arr[i])
            curr.next = node;
            node.prev = curr;
            curr = curr.next;
    }
    return head
}

let reverseList = (head) => {
    let prev = head;
    let curr = head.next;
    prev.next = null
    while (curr) {
        prev.prev = curr
        curr.prev = curr.next
        curr.next = prev
        prev = curr
        curr = curr.prev
    }
    return prev
}

let arr = [12, 5, 6, 8, 4];

let DllList = convertToDLL(arr)

DllList = reverseList(DllList)




printList(DllList)
