/**
    155. Min Stack


    Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.
    You must implement a solution with O(1) time complexity for each function.

    

    Example 1:

    Input
    ["MinStack","push","push","push","getMin","pop","top","getMin"]
    [[],[-2],[0],[-3],[],[],[],[]]

    Output
    [null,null,null,null,-3,null,0,-2]

    Explanation
    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin(); // return -3
    minStack.pop();
    minStack.top();    // return 0
    minStack.getMin(); // return -2
    

    Constraints:

    -231 <= val <= 231 - 1
    Methods pop, top and getMin operations will always be called on non-empty stacks.
    At most 3 * 104 calls will be made to push, pop, top, and getMin.
 */


    class MinStack {
        constructor() {
            this.stack = [];
            this.min = null;  // This will store the current minimum
        }
    
        push(val) {
            if (this.stack.length === 0) {
                // If the stack is empty, set the min to the value being pushed
                this.stack.push(0);  // Store the difference (val - min), which is 0 here
                this.min = val;      // Set the current minimum to val
            } else {
                // Store the difference between val and min in the stack
                this.stack.push(val - this.min);
                if (val < this.min) {
                    // If the new value is the new minimum, update min
                    this.min = val;
                }
            }
        }
    
        pop() {
            if (this.stack.length === 0) return;
    
            let top = this.stack.pop();
            if (top < 0) {
                // If the top is negative, it means it encoded the previous minimum
                this.min = this.min - top;  // Restore the previous minimum
            }
            // If top >= 0, min remains unchanged
        }
    
        top() {
            if (this.stack.length === 0) return null;
    
            let top = this.stack[this.stack.length - 1];
            if (top > 0) {
                // If the top is positive, the top value is min + top
                return this.min + top;
            } else {
                // If the top is negative or zero, the top value is min
                return this.min;
            }
        }
    
        getMin() {
            return this.min;
        }
    }
    