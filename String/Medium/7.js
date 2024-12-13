/**
    Given a string s, return the longest 
    palindromic
    
    substring
    in s.

    

    Example 1:

    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.
    Example 2:

    Input: s = "cbbd"
    Output: "bb"
 */

{
    var longestPalindrome = function (str) {
        let ans = "";
        for (let s = 0; s < str.length; s++) {
            for (let e = 0; e < str.length; e++) {
                let subStr = str.substring(s, e + 1)
                if (isPalindrom(subStr) && ans.length < subStr.length) {
                    ans = subStr;
                }
            }
        }
        return ans;
    };


    function isPalindrom(str) {
        let s = 0;
        let e = str.length - 1;
        while (s <= e) {
            if (str[s] != str[e])
                return false;
            s++
            e--
        }
        return true;
    }

    console.log(longestPalindrome("babad"));
}

var longestPalindrome = function (str) {
    if (str.length === 0) return ""
    let ans = ''
    for (let i = 0; i < str.length; i++) {
        let oddStr = expandAroundCenter(i, i, str);
        let evenStr = expandAroundCenter(i, i + 1, str);
        let longAns = oddStr.length > evenStr.length ? oddStr : evenStr;
        if (longAns.length > ans.length) {
            ans = longAns;
        }
    }
    return ans;
}

var expandAroundCenter = function (left, right, str) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    return str.substring(left + 1, right)
}
console.log(longestPalindrome("babad"));



