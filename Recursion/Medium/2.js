/**
 *  Generate Parentheses

    Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

    Example 1:

    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]
    Example 2:

    Input: n = 1
    Output: ["()"]
 */

// brute force 
{
    // 1 - generate all permuatation
    // 2 - check for balanced


    function permuatation(str, j, ans) {
        if (j == str.length && balanceParenthesis(str)) {
            ans.push(str)
        }

        for (let i = j; i < str.length; i++) {
            permuatation(swap(str, i, j), j + 1, ans)
        }
    }

    function generateParenthesis(k) {
        let str = '';
        let ans = []
        for (let index = 0; index < k; index++) {
            str += '()'
        }
        permuatation(str, 0, ans)
        console.log([...new Set(ans)]);
    }

    //generateParenthesis(6)

    function balanceParenthesis(str) {
        let stack = [];
        for (let index = 0; index < str.length; index++) {
            if (str[index] == '(') {
                stack.push('(');
            } else {
                // If there's no matching opening parenthesis, return false
                if (stack.length == 0) {
                    return false;
                }
                stack.pop(); // Pop the matching opening parenthesis
            }
        }

        // If the stack is empty, parentheses are balanced
        return stack.length == 0;
    }

    function swap(str, i, j) {
        str = [...str];
        [str[i], str[j]] = [str[j], str[i]];
        str = str.join('');
        return str
    }

}

// optimal sol

{
    function generateParenthesis(k) {
        let str = '';
        let ans = []
        for (let index = 0; index < k; index++) {
            str += '()'
        }
        
        util(0, 0, '', ans, k)
        console.log(ans);
    }
    generateParenthesis(3)
    function util(open, close, str, ans, n) {
        if(str.length == n * 2) {
            ans.push(str)
            return;
        }
        if(open < n) {
            util(open+1, close, str+'(', ans, n)
        }
        if(open > close) {
            util(open, close+1, str+')', ans, n)
        }
    }
}