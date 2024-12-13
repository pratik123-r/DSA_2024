/**
    Write a function to find the longest common prefix string amongst an array of strings.

    Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"

    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

 */

var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';  
    strs.sort();
    
    let first = strs[0];
    let last = strs[strs.length - 1];
    let ans = '';
    
    let x = 0;
    
    while (x < first.length && x < last.length && first[x] === last[x]) {
        ans += first[x];
        x++;
    }
    
    return ans;

};

console.log(longestCommonPrefix(["flower","flow","flight"]));