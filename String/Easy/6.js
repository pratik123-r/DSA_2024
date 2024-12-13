/**
 * Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
 *
    Example 1:

    Input: s = "abcde", goal = "cdeab"
    Output: true
    Example 2:

    Input: s = "abcde", goal = "abced"
    Output: false
 */

var rotateString = function (s, goal) {
    return (s.length === goal.length) && (s+s).includes(goal)
};

console.log(rotateString('abcde', 'cdeab'));