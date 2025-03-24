const flattenArrayIterative = (arr) => {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        const stack = arr[i];
        let temp = []
        while (stack.length) {
            let element = stack.pop()
            if (Array.isArray(element)) {
                stack.push(...element)
            } else {
                temp.push(element)
            }
        }
        ans = [...ans, ...temp.reverse()]
    }
    return ans
};

const resultIterative = flattenArrayIterative([[[[0]], [1]], [[[2], [3]]], [[4],
[5]]])
console.log(resultIterative);

const flattenArrayRecursive = (array) => {
    let ans = []
    for (let index = 0; index < array.length; index++) {
        if (Array.isArray(array[index])) {
            ans.push(...flattenArrayRecursive(array[index]))
        } else {
            ans.push(array[index])
        }
    }
    return ans
};

const resultRecursive = flattenArrayRecursive([[[[0]], [1]], [[[2], [3]]], [[4],
[5]]])
console.log(resultRecursive);

const flattenArrayRecursiveDepth = (array, depth) => {  
    let ans = []
    for (let index = 0; index < array.length; index++) {
        if (depth > 0 && Array.isArray(array[index])) {
            ans.push(...flattenArrayRecursiveDepth(array[index], depth
                - 1
            ))
        } else {
            ans.push(array[index])
        }
    }
    return ans
};

const resultRecursiveDepth = flattenArrayRecursiveDepth([[[[[0]]], [1]], [[[2], [3]]], [[4],
[5]]], 2)
console.log(resultRecursiveDepth);
