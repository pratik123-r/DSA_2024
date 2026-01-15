function flattenArrayIterative(arr) {
  let ans = [];
  let stack = [...arr]; 

  while (stack.length) {
    let element = stack.pop();
    if (Array.isArray(element)) {
      stack.push(...element);
    } else {
      ans.push(element);
    }
  }

  return ans.reverse();
}


const resultIterative = flattenArrayIterative([[[[0]], [1]], [[[2], [3]]], [[4],
[5]]])
console.log(resultIterative);


function flat(arr, depth = 1) {
  let ans = [];
  let stack = arr.map(value => ({ value, depth }));

  while (stack.length) {
    const { value, depth } = stack.pop();

    if (Array.isArray(value) && depth > 0) {
      for (let i = 0 ; i < value.length; i++) {
        stack.push({ value: value[i], depth: depth - 1 });
      }
    } else {
      ans.push(value);
    }
  }

  return ans.reverse();
}
flat([1, [2, [3, [4]]]], 2);



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
