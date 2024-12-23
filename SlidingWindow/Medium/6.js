/**
 * Number of Substrings Containing All Three Characters

Example 1:
Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 

Example 2:
Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 

Example 3:
Input: s = "abc"
Output: 1 

 */

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (str) {
    return countKDistinctSubstrings(str, 3)
};


function countAtMostKDistinct(s, k) {
    let n = s.length;
    let totalCount = 0;
    let charFrequency = new Map();  // To store the frequency of characters
    let left = 0;  // Left pointer of the sliding window

    // Expand the window by moving the right pointer
    for (let right = 0; right < n; right++) {
        // Add or update the frequency of the character at s[right]
        charFrequency.set(s[right], (charFrequency.get(s[right]) || 0) + 1);

        // Shrink the window if we have more than k distinct characters
        while (charFrequency.size > k) {
            charFrequency.set(s[left], charFrequency.get(s[left]) - 1);

            // Remove the character from the map if its frequency becomes 0
            if (charFrequency.get(s[left]) === 0) {
                charFrequency.delete(s[left]);
            }
            left++;  // Move the left pointer to shrink the window
        }

        // All substrings between left and right have at most k distinct characters
        totalCount += (right - left + 1);
    }

    return totalCount;
}

function countKDistinctSubstrings(s, k) {
    // Count substrings with exactly k distinct characters
    return countAtMostKDistinct(s, k) - countAtMostKDistinct(s, k - 1);
}





console.log(numberOfSubstrings("abcabc", 3));

// more optimise sol
var numberOfSubstrings2 = function(s) {
    let n = s.length;
    let i = 0, j = 0, count = 0;
    let charFrequency = new Map(); // To store the frequency of characters in the current window

    while (j < n) {
        // Add the current character to the frequency map
        charFrequency.set(s[j], (charFrequency.get(s[j]) || 0) + 1);

        // Check if the current window contains at least one 'a', 'b', and 'c'
        while (charFrequency.get('a') >= 1 && charFrequency.get('b') >= 1 && charFrequency.get('c') >= 1) {
            // Add all substrings from current position to the end
            count += (n - j);

            // Shrink the window from the left
            charFrequency.set(s[i], charFrequency.get(s[i]) - 1);
            if (charFrequency.get(s[i]) === 0) {
                charFrequency.delete(s[i]); // Remove the character from the map if its frequency is 0
            }
            i++;
        }

        j++;
    }

    return count;
};

console.log(numberOfSubstrings2("abcabc", 3));
