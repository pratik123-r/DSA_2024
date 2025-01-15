/**
 * Longest Palindromic Subsequence | (DP-28) same as 1
 */

var longestPalindromeSubseq = function (s) {
    let dp = new Map()
    return solve(s, s.split("").reverse().join(""), s.length - 1, s.length - 1, dp)
};


function solve(str1, str2, ind1, ind2, dp) {    
    if (ind1 < 0 || ind2 < 0)
        return 0
    const dpKey = ind1 + '-' + ind2
    if (dp.has(dpKey))
        return dp.get(dpKey)
    if (str1[ind1] == str2[ind2]) {
        let ans = 1 + solve(str1, str2, ind1 - 1, ind2 - 1, dp)
        dp.set(dpKey, ans)
        return ans
    }
    let ans = Math.max(solve(str1, str2, ind1, ind2 - 1, dp), solve(str1, str2, ind1 - 1, ind2, dp))
    dp.set(dpKey, ans)
    return ans;
}


console.log(longestPalindromeSubseq('cbbd'));
