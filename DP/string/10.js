
function isAllStars(S1, i) {
    for (let j = 0; j <= i; j++) {
        if (S1[j] !== '*') {
            return false;
        }
    }
    return true;
}

// Function to perform wildcard pattern matching
function wildcardMatchingUtil(S1, S2, i, j, dp) {
    // Base Conditions
    if (i < 0 && j < 0) {
        return true;
    }
    if (i < 0 && j >= 0) {
        return false;
    }
    if (j < 0 && i >= 0) {
        return isAllStars(S1, i);
    }

    // Check if the result for the current indices is already calculated
    if (dp[i][j] !== -1) {
        return dp[i][j];
    }

    if (S1[i] === S2[j] || S1[i] === '?') {
        return dp[i][j] = wildcardMatchingUtil(S1, S2, i - 1, j - 1, dp);
    } else {
        if (S1[i] === '*') {
            return dp[i][j] = wildcardMatchingUtil(S1, S2, i - 1, j, dp) || wildcardMatchingUtil(S1, S2, i, j - 1, dp);
        } else {
            return false;
        }
    }
}

// Function to perform wildcard pattern matching
function wildcardMatching(S1, S2) {
    const n = S1.length;
    const m = S2.length;

    // Create a 2D array to store dynamic programming values
    const dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));

    return wildcardMatchingUtil(S1, S2, n - 1, m - 1, dp);
}

// Main function
function main() {
    const S1 = "ab*cd";
    const S2 = "abdefcd";

    // Check if S1 matches S2 using wildcard matching
    if (wildcardMatching(S1, S2)) {
        console.log("String S1 and S2 do match");
    } else {
        console.log("String S1 and S2 do not match");
    }
}

// Call the main function to start the program
main();

