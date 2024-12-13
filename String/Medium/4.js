
var lengthOfLongestSubstring = function (s) {
    let ans = 0;
    let map = new Map(); // to store the last index of each character
    let start = 0; // starting index of current window

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            // Update the start to the max of current start or one position after the last occurrence
            start = Math.max(start, map.get(s[i]) + 1);
        }
        // Update the longest substring length
        ans = Math.max(ans, i - start + 1);
        // Update the last index of the current character
        map.set(s[i], i);
    }
    
    return ans;
};

console.log(lengthOfLongestSubstring("cadbzabcd"));