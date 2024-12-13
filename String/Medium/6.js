/**
 
    Given a string of lowercase alphabets, count all possible substrings 
    (not necessarily distinct) that have exactly k distinct characters. 

    Example 1:

    Input: S = "aba", K = 2
    Output:3
    Explanation:The substrings are: "ab", "ba" and "aba".

    Input: S = "abaaca", K = 1
    Output: 7
    Explanation: The substrings are: "a", "b", "a", "aa", "a", "c", "a". 

    Expected Time Complexity: O(|S|).
    Expected Auxiliary Space: O(1).
 */




// burte force
function countKDistinctSubstrings(s, k) {
    let n = s.length;  // Length of the input string
    let totalCount = 0;  // To store the total count of valid substrings

    // Loop through each character as the starting point of the substring
    for (let start = 0; start < n; start++) {
        let charFrequency = new Map();  // To store character frequencies in the current window

        // Expand the substring by moving the end pointer
        for (let end = start; end < n; end++) {
            // Add or update the frequency of the character s[end] directly in the map
            charFrequency.set(s[end], (charFrequency.get(s[end]) || 0) + 1);

            // If the number of distinct characters equals k, count this substring
            if (charFrequency.size === k) {
                totalCount++;
            }

            // If the number of distinct characters exceeds k, break out of the loop
            if (charFrequency.size > k) {
                break;
            }
        }
       
    }

    return totalCount;
}

// better sol o(n)
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



