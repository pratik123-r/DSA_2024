/**
    Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

    Example 1:

    Input: s = "(1+(2*3)+((8)/4))+1"
    Output: 3
    Explanation:
    Digit 8 is inside of 3 nested parentheses in the string.

    Example 2:
    Input: s = "(1)+((2))+(((3)))"
    Output: 3
    Explanation:
    Digit 3 is inside of 3 nested parentheses in the string.

    Example 3:
    Input: s = "()(())((()()))"
    Output: 3
 */

var maxDepth = function (s) {
    let count = 0;
    let ans = 0;
    for (let index = 0; index < s.length; index++) {
        if ('(' == s[index]) {
            count++
        } else if (')' == s[index]) {
            count--
        }
        ans = Math.max(ans, count)
    }
    return ans;
};

console.log(maxDepth("()(())((()()))"));