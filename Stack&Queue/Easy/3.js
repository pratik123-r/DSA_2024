/**
 * Lec 2: Prefix, Infix, PostFix Conversion Problems
 */

/**
 * 1. infix to postfix
 */

function infixToPostfix(expression) {
    let output = [];    // To store the postfix expression
    let stack = [];     // To store operators and parentheses

    // Define operator precedence
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    // Helper function to check if a character is an operand
    const isOperand = (char) => /[a-zA-Z0-9]/.test(char);

    for (let char of expression) {
        if (isOperand(char)) {
            // If the character is an operand, add it to the output
            output.push(char);
        } else if (char === '(') {
            // If the character is '(', push it onto the stack
            stack.push(char);
        } else if (char === ')') {
            // If the character is ')', pop until '(' is found
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }
            stack.pop();  // Discard the '('
        } else {
            // The character is an operator, so pop higher precedence operators from the stack
            while (stack.length > 0 && precedence[char] <= precedence[stack[stack.length - 1]] &&
                !(char === '^' && precedence[char] === precedence[stack[stack.length - 1]])) {
                output.push(stack.pop());
            }
            // Push the current operator to the stack
            stack.push(char);
        }
    }

    // Pop any remaining operators from the stack to the output
    while (stack.length > 0) {
        output.push(stack.pop());
    }

    return output.join(' ');
}

console.log(infixToPostfix('A+B*(C^D-E)')); // Output: "A B C D ^ E - * +"


/**
 * 2. infixToPrefix
    Algorithm:
    Reverse the infix expression (swap parentheses ( and )).
    Use a modified Shunting Yard algorithm to convert the reversed infix expression to postfix (just like you would for postfix conversion).
    Reverse the postfix expression to get the prefix result.
 */

 function infixToPrefix(expression) {
    // Helper functions
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    const isOperand = (char) => /[a-zA-Z0-9]/.test(char);

    // Reverse the infix expression and swap parentheses
    function reverseAndSwap(expression) {
        return expression.split('').reverse().map(char => {
            if (char === '(') return ')';
            if (char === ')') return '(';
            return char;
        }).join('');
    }

    // The core of infix-to-postfix logic
    function infixToPostfix(expression) {
        let output = [];
        let stack = [];

        for (let char of expression) {
            if (isOperand(char)) {
                // Operand goes directly to the output
                output.push(char);
            } else if (char === '(') {
                // Opening parenthesis goes to the stack
                stack.push(char);
            } else if (char === ')') {
                // Closing parenthesis: pop until '(' is found
                while (stack.length && stack[stack.length - 1] !== '(') {
                    output.push(stack.pop());
                }
                stack.pop();  // Remove '(' from stack
            } else {
                // Operator: pop higher precedence operators from the stack
                while (stack.length && precedence[char] <= precedence[stack[stack.length - 1]]) {
                    output.push(stack.pop());
                }
                stack.push(char);  // Push current operator to the stack
            }
        }

        // Pop all remaining operators in the stack
        while (stack.length) {
            output.push(stack.pop());
        }

        return output.join('');
    }

    // Step 1: Reverse the infix expression and swap parentheses
    let reversedInfix = reverseAndSwap(expression);

    // Step 2: Convert the reversed infix to postfix
    let reversedPostfix = infixToPostfix(reversedInfix);

    // Step 3: Reverse the postfix to get the prefix expression
    let prefix = reversedPostfix.split('').reverse().join('');

    return prefix;
}
console.log(infixToPrefix('(A-B/C)*(A/K-L)')); // Output: "*-A/BC-/AKL"

/** 
 * 3. postfixToInfix
    Operands are pushed onto a stack.

    Operators pop operands from the stack, combine them in the correct order, and push the result back onto the stack.
    For binary operators (e.g., +, -, *, /), two operands are popped, the operator is inserted between them in the infix 
    format (operand1 operator operand2), and this result is pushed back onto the stack.

    At the end, the stack contains a single element, which is the complete infix expression.
 */

 function postfixToInfix(expression) {
    let stack = [];

    // Helper function to check if a character is an operator
    const isOperator = (char) => ['+', '-', '*', '/', '^'].includes(char);

    for (let char of expression) {
        if (isOperator(char)) {
            // Pop two operands from the stack
            let operand2 = stack.pop();
            let operand1 = stack.pop();

            // Combine them in the form: (operand1 operator operand2)
            let result = `(${operand1} ${char} ${operand2})`;

            // Push the resulting expression back onto the stack
            stack.push(result);
        } else {
            // If it's an operand, push it onto the stack
            stack.push(char);
        }
    }

    // The final element of the stack is the complete infix expression
    return stack[0];
}

console.log(postfixToInfix('AB+C*'));  // Output: "((A + B) * C)"

/**
 * prefixToInfix
 */

 function prefixToInfix(expression) {
    let stack = [];

    // Helper function to check if a character is an operator
    const isOperator = (char) => ['+', '-', '*', '/', '^'].includes(char);

    // Scan the prefix expression from right to left
    for (let i = expression.length - 1; i >= 0; i--) {
        let char = expression[i];

        if (isOperator(char)) {
            // Pop two operands from the stack
            let operand1 = stack.pop();
            let operand2 = stack.pop();

            // Combine them in the form: (operand1 operator operand2)
            let result = `(${operand1} ${char} ${operand2})`;

            // Push the resulting expression back onto the stack
            stack.push(result);
        } else {
            // If it's an operand, push it onto the stack
            stack.push(char);
        }
    }

    // The final element of the stack is the complete infix expression
    return stack[0];
}

const infixExpr = prefixToInfix("*+AB-CD");
console.log(infixExpr);  // Output: "((A + B) * (C - D))"

/**
 * postfixToPrefix
 */

 function postfixToPrefix(expression) {
    let stack = [];

    // Helper function to check if a character is an operator
    const isOperator = (char) => ['+', '-', '*', '/', '^'].includes(char);

    for (let char of expression) {
        if (isOperator(char)) {
            // Pop two operands from the stack
            let operand2 = stack.pop();  // Operand from top of the stack
            let operand1 = stack.pop();  // Next operand from the stack

            // Combine them in the form: operator operand1 operand2
            let result = `${char} ${operand1} ${operand2}`;

            // Push the resulting expression back onto the stack
            stack.push(result);
        } else {
            // If it's an operand, push it onto the stack
            stack.push(char);
        }
    }

    // The final element of the stack is the complete prefix expression
    return stack[0];
}

const postfixExpr = "AB+C*D-"; // Equivalent to ((A + B) * C) - D in infix
const prefixExpr = postfixToPrefix(postfixExpr);
console.log(prefixExpr);  // Output: "-*+ABCD"

/**
 * prefixtopostfix
 */
 function prefixToPostfix(expression) {
    let stack = [];

    // Helper function to check if a character is an operator
    const isOperator = (char) => ['+', '-', '*', '/', '^'].includes(char);

    // Scan the prefix expression from right to left
    for (let i = expression.length - 1; i >= 0; i--) {
        let char = expression[i];

        if (isOperator(char)) {
            // Pop two operands from the stack
            let operand1 = stack.pop();  // First operand
            let operand2 = stack.pop();  // Second operand

            // Combine them in the form: operand1 operand2 operator
            let result = `${operand1} ${operand2} ${char}`;

            // Push the resulting expression back onto the stack
            stack.push(result);
        } else {
            // If it's an operand, push it onto the stack
            stack.push(char);
        }
    }

    // The final element of the stack is the complete postfix expression
    return stack[0];
}

console.log(prefixToPostfix('*+AB-CD'));  // Output: "A B + C D - *"