
function editDistanceUtil(S1, S2, i, j, dp) {
    // If the first string is empty, the only option is to insert all characters from the second string
    if (i < 0) {
        return j + 1;
    }
    // If the second string is empty, the only option is to delete all characters from the first string
    if (j < 0) {
        return i + 1;
    }

    // Check if the result for the current indices is already calculated
    if (dp[i][j] !== -1) {
        return dp[i][j];
    }

    // If the characters at the current positions are the same, no operation is needed
    if (S1[i] === S2[j]) {
        return dp[i][j] = editDistanceUtil(S1, S2, i - 1, j - 1, dp);
    }

    // Minimum of three choices:
    // 1. Substitute a character in the first string with a character in the second string
    // 2. Delete a character from the first string
    // 3. Insert a character into the first string
    return (dp[i][j] = 1 + Math.min(
        editDistanceUtil(S1, S2, i - 1, j - 1, dp),
        Math.min(
            editDistanceUtil(S1, S2, i - 1, j, dp),
            editDistanceUtil(S1, S2, i, j - 1, dp)
        )
    ));
}

// Function to calculate the minimum edit distance between two strings
function editDistance(S1, S2) {
    const n = S1.length;
    const m = S2.length;

    // Create a 2D array to store dynamic programming values
    const dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));

    // Call the recursive utility function
    return editDistanceUtil(S1, S2, n - 1, m - 1, dp);
}

// Main function
function main() {
    const s1 = "horse";
    const s2 = "ros";

    // Call the editDistance function and print the result
    console.log("The minimum number of operations required is: " + editDistance(s1, s2));
}

// Call the main function to start the program
main();

