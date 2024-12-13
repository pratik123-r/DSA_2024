/**
 * reverse stack using recursion
 */




// Function to insert an element at the bottom of the stack
let insertAtBottom = (stack, element) => {
    // Base case: If the stack is empty, push the element at the bottom
    if (stack.length === 0) {
        stack.push(element);
        return;
    }

    // Pop the top element and recursively call insertAtBottom to insert 'element' at the bottom
    let top = stack.pop();
    insertAtBottom(stack, element);

    // Push the top element back after the element has been inserted at the bottom
    stack.push(top);
}

// Function to reverse the stack using recursion
let reverseStack = (stack) => {
    // Base case: If the stack is empty, return
    if (stack.length === 0) {
        return;
    }

    // Pop the top element
    let top = stack.pop();

    // Recursively reverse the remaining stack
    reverseStack(stack);

    // Insert the popped element at the bottom
    insertAtBottom(stack, top);
}

// Example Usage:
let stack = [1, 2, 3, 4, 5];
console.log("Original Stack: " , stack);

reverseStack(stack);
console.log("Reversed Stack: " , stack);
