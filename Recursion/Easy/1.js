/**
 * Sort stack using stack (recursion)
 */



const sortInsert = (stack, element) => {
    if (stack.length == 0 || element >= stack[stack.length - 1]) {
        stack.push(element);
        return;
    }
    let top = stack.pop()
    sortInsert(stack, element)
    stack.push(top);
}

const sort = (stack) => {
    if (!stack.length)
        return;
    let top = stack.pop()
    sort(stack);
    sortInsert(stack, top)
}



let stack = [34, 3, 31, 98, 92, 23]
sort(stack)
console.log(stack);