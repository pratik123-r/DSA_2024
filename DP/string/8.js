
const prime = 1e9 + 7;

// Function to count the distinct subsequences
function countUtil(s1, s2, ind1, ind2, dp) {
    // If ind2 goes below 0, we have found a valid subsequence
    if (ind2 < 0) {
        return 1;
    }
    // If ind1 goes below 0, there are no more characters in s1 to form a subsequence
    if (ind1 < 0) {
        return 0;
    }

    // Check if the result for the current indices is already calculated
    if (dp[ind1][ind2] !== -1) {
        return dp[ind1][ind2];
    }

    // If the characters at ind1 in s1 and ind2 in s2 match
    if (s1[ind1] === s2[ind2]) {
        // We have two choices: either leave one character in s1 and s2 and continue searching,
        // or leave one character in s1 and s2 and one character in s1, but we need to add them modulo prime
        const leaveOne = countUtil(s1, s2, ind1 - 1, ind2 - 1, dp);
        const stay = countUtil(s1, s2, ind1 - 1, ind2, dp);

        // Store the result in dp and return
        return (dp[ind1][ind2] = (leaveOne + stay) % prime);
    } else {
        // If the characters do not match, we can only leave one character in s1 and continue searching
        return (dp[ind1][ind2] = countUtil(s1, s2, ind1 - 1, ind2, dp));
    }
}

// Function to count the distinct subsequences
function subsequenceCounting(s1, s2) {
    const lt = s1.length;
    const ls = s2.length;

    // Create a 2D array to store dynamic programming values
    const dp = new Array(lt).fill(null).map(() => new Array(ls).fill(-1));

    // Start the counting process from the end of both strings
    return countUtil(s1, s2, lt - 1, ls - 1, dp);
}

// Main function
function main() {
    const s1 = "babgbag";
    const s2 = "bag";

    // Call the subsequenceCounting function and print the result
    console.log("The Count of Distinct Subsequences is " + subsequenceCounting(s1, s2));
}

// Call the main function to start the program
main();

