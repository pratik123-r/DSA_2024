//https://leetcode.com/problems/shortest-common-supersequence/description/

/**
    Input: str1 = "brute", str2 = "groot"
    Output: "cabac"
    Explanation: 
    str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
    str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
    The answer provided is the shortest such string that satisfies these properties.
 */

var shortestCommonSupersequence = function (str1, str2) {
    let n = str1.length;
    let m = str2.length;
    const ans = []
    // Create a DP table with 0 initialization
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    longestCommonSubsequencetab(str1, str2, dp)

    while (n > 0 && m > 0) {     
        if (str1[n-1] === str2[m-1]) {
            ans.push(str1[n-1])
            n--
            m--
        } else if (dp[n][m - 1] > dp[n - 1][m]) {
            ans.push(str2[m-1])
            m--
        } else {
            ans.push(str1[n-1])
            n--
        }
    }
    // Append any remaining characters from str1 or str2
    while (n > 0) {
        ans.push(str1[n - 1]);
        n--;
    }
    while (m > 0) {
        ans.push(str2[m - 1]);
        m--;
    }
    return ans.reverse().join("");

};

function longestCommonSubsequencetab(s1, s2, dp) {
    const n = s1.length;
    const m = s2.length;

    // Fill the DP table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]; // If characters match, extend the length
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }
}

shortestCommonSupersequence('brute', 'groot')