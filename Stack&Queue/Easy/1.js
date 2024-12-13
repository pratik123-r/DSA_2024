/**
 * 20. Valid Parentheses
 */

const isVaild = (str) => {
    let stack = [];
    for (let index = 0; index < str.length; index++) {
        if(['(', '{', '['].includes(str[index])) {
            stack.push(str[index])
        } else {
           let top = stack.pop();
           if(!((top === '(' && str[index] === ')') || (top === '{' && str[index] === '}') || (top === '[' && str[index] === ']')))
                return false
        }
        
    }
    return !stack.length
}

console.log(isVaild('([])'));