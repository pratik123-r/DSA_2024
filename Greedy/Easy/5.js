/**
 * Valid Parenthesis String
 * 
    Example 1:
    Input: s = "()"
    Output: true

    Example 2:
    Input: s = "(*)"
    Output: true

    Example 3:
    Input: s = "(*))"
    Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function checkValidString(s) {
    let openStack = [];
    let starStack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            openStack.push(i); // Store the index of '('
        } else if (s[i] === '*') {
            starStack.push(i); // Store the index of '*'
        } else { // Handle ')'
            if (openStack.length > 0) {
                openStack.pop(); // Match ')' with '('
            } else if (starStack.length > 0) {
                starStack.pop(); // Match ')' with '*'
            } else {
                return false; // Unmatched ')'
            }
        }
    }
    
    // Now check if unmatched '(' can be balanced by '*'
    while (openStack.length > 0 && starStack.length > 0) {
        if (openStack[openStack.length - 1] < starStack[starStack.length - 1]) {
            openStack.pop();
            starStack.pop();
        } else {
            return false; // '(' appears after '*', invalid
        }
    }
    
    // Valid if no unmatched '(' remain
    return openStack.length === 0;
}

function checkValidString(s) {
    // *((()) -> gives wrong in rigth to left
    // (()))* -> gives wrong in left to right

    let open = 0, close = 0; // Track open and close balances
    let n = s.length;

    for (let i = 0; i < n; i++) {
        // Forward pass: Treat '(' and '*' as open, and ')' as close
        if (s[i] === '(' || s[i] === '*') open++;
        if (s[i] === ')') open--;

        // Backward pass: Treat ')' and '*' as close, and '(' as open
        if (s[n - i - 1] === ')' || s[n - i - 1] === '*') close++;
        if (s[n - i - 1] === '(') close--;

        // If at any point open or close goes negative, the string is invalid
        if (open < 0 || close < 0) return false;
    }

    return true; // If we reach here, the string is valid
}

var checkValidString = function(s) {
    let leftMin = 0, leftMax = 0;

    for (let c of s) {
        if (c === '(') {
            leftMin++;
            leftMax++;
        } else if (c === ')') {
            leftMin--;
            leftMax--;
        } else {
            leftMin--;
            leftMax++;
        }
        if (leftMax < 0) return false;
        if (leftMin < 0) leftMin = 0;
    }
    
    return leftMin === 0;
};
 

function checkValidStringRecursive(s, index = 0, balance = 0) {
    // Base case: If we reach the end of the string
    if (index === s.length) {
        return balance === 0; // Valid if balance is 0
    }

    // If balance is negative, it's invalid
    if (balance < 0) {
        return false;
    }

    // Process the current character
    if (s[index] === '(') {
        // Increase balance for '('
        return checkValidStringRecursive(s, index + 1, balance + 1);
    } else if (s[index] === ')') {
        // Decrease balance for ')'
        return checkValidStringRecursive(s, index + 1, balance - 1);
    } else if (s[index] === '*') {
        // Try all three possibilities for '*'
        return (
            checkValidStringRecursive(s, index + 1, balance + 1) || // Treat '*' as '('
            checkValidStringRecursive(s, index + 1, balance - 1) || // Treat '*' as ')'
            checkValidStringRecursive(s, index + 1, balance)        // Treat '*' as empty
        );
    }

    // Return false for any invalid character
    return false;
}


console.log(checkValidString('(((((()*)(*)*))())())(()())())))((**)))))(()())()'));
