function main() {
    const s1 = "ABCDGH";
    const s2 = "ACDGHR";
    const ans = longestCommonSubstring(s1, s2);
    console.log(ans);
}

function longestCommonSubstring(s1, s2) {
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
                dp[i][j] = 0; // Reset if characters don't match
            }
        }
    }

    return maxLength;
}

main();

