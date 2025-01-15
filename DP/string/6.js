/**
 * 
583. Delete Operation for Two Strings
https://leetcode.com/problems/delete-operation-for-two-strings/
 */

var minDistance = function(m, n) {
    let dp = new Map()
    return m.length + n.length - (2 * longestPalindromeSubseq(m, n, m.length - 1, n.length - 1, dp))
};

function longestPalindromeSubseq(str1, str2, ind1, ind2, dp) {    
    if (ind1 < 0 || ind2 < 0)
        return 0
    const dpKey = ind1 + '-' + ind2
    if (dp.has(dpKey))
        return dp.get(dpKey)
    if (str1[ind1] == str2[ind2]) {
        let ans = 1 + longestPalindromeSubseq(str1, str2, ind1 - 1, ind2 - 1, dp)
        dp.set(dpKey, ans)
        return ans
    }
    let ans = Math.max(longestPalindromeSubseq(str1, str2, ind1, ind2 - 1, dp), longestPalindromeSubseq(str1, str2, ind1 - 1, ind2, dp))
    dp.set(dpKey, ans)
    return ans;
}
console.log(minDistance("abcd", 'anc'));

