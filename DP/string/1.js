/**
 * https://takeuforward.org/data-structure/longest-common-subsequence-dp-25/
 * https://leetcode.com/problems/longest-common-subsequence/description/
 * 
    Example 1:
    Input: text1 = "abcde", text2 = "ace" 
    Output: 3  
    Explanation: The longest common subsequence is "ace" and its length is 3.

    Example 2:
    Input: text1 = "abc", text2 = "abc"
    Output: 3
    Explanation: The longest common subsequence is "abc" and its length is 3.

    Example 3:
    Input: text1 = "abc", text2 = "def"
    Output: 0
    Explanation: There is no such common subsequence, so the result is 0.
 */

var longestCommonSubsequence = function (text1, text2) {
    let dp = new Map()
    let ans =  solve(text1, text2, text1.length - 1, text2.length - 1, dp)
    console.log(reconstructLCS(text1, text2, dp));
    return ans
    
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

function reconstructLCS(str1, str2, dp) {
    let i = str1.length - 1;
    let j = str2.length - 1;
    let lcs = [];

    while (i >= 0 && j >= 0) {
        const dpKey = i + '-' + j;
        if (str1[i] === str2[j]) {
            lcs.push(str1[i]); // Include this character in LCS
            i--;
            j--;
        } else {
            const leftKey = i + '-' + (j - 1);
            const topKey = (i - 1) + '-' + j;

            const leftValue = dp.has(leftKey) ? dp.get(leftKey) : -1;
            const topValue = dp.has(topKey) ? dp.get(topKey) : -1;

            // Move in the direction of the maximum value
            if (leftValue > topValue) {
                j--;
            } else {
                i--;
            }
        }
    }

    return lcs.reverse().join(''); // Reverse to get the correct order
}

function longestCommonSubsequencetab(s1, s2) {
    const n = s1.length;
    const m = s2.length;
    
    // Create a DP table with 0 initialization
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    let maxLength = 0;


    // Fill the DP table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]; // If characters match, extend the length
                maxLength = Math.max(maxLength, dp[i][j]); // Track the maximum length
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }

    return maxLength;
}


console.log(longestCommonSubsequence('abcde', 'ace'));
console.log(longestCommonSubsequencetab('abcde', 'ace'));


