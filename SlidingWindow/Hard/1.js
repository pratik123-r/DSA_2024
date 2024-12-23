/**
 * Minimum Window Substring
 * 
 * 
Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

*/

var checkAllInclude = (tMap, subMap) => {
    for (const [key, value] of tMap) {
        if (!subMap.has(key) || subMap.get(key) < value)
            return false
    }
    return true
}

var minWindow = function (str, t) {
    let ans = '';
    let ansMin = Number.MAX_VALUE
    let s = 0;
    let tMap = new Map()
    let subMap = new Map()
    for (const char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }

    for (let e = 0; e < str.length; e++) {
        subMap.set(str[e], (subMap.get(str[e]) || 0) + 1);
        while (checkAllInclude(tMap, subMap)) {
            
            if (ansMin > e - s + 1) {
                ansMin = e - s + 1
                ans = str.substring(s, e+1)
            }
            subMap.set(str[s], subMap.get(str[s]) - 1);
            if (subMap.get(str[s]) == 0) {
                subMap.delete(str[s])
            }
            s++;
        }
    }
    if (s < str.length) {
        while (checkAllInclude(tMap, subMap)) {
            if (ansMin > str.length - s) {
                ansMin = str.length - s
                ans = str.substring(s, str.length)
            }
            subMap.set(str[s], subMap.get(str[s]) - 1);
            if (subMap.get(str[s]) == 0) {
                subMap.delete(str[s])
            }
            s++;
        }
    }
    return ans
};


console.log(minWindow("ADOBECODEBANC", "ABC"));
