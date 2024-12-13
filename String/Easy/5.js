/**
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 * 
    Example 1:

    Input: s = "egg", t = "add"

    Output: true

    Explanation:

    The strings s and t can be made identical by:

    Mapping 'e' to 'a'.
    Mapping 'g' to 'd'.

    Example 2:

    Input: s = "foo", t = "bar"

    Output: false

    Explanation:

    The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

    Example 3:

    Input: s = "paper", t = "title"

    Output: true
 */

    var isIsomorphic = function(s, t) {
        if (s.length !== t.length) return false;
    
        let mapST = new Map(); // Mapping from s to t
        let mapTS = new Map(); // Mapping from t to s
    
        for (let i = 0; i < s.length; i++) {
            let charS = s[i];
            let charT = t[i];
    
            // Check mapping from s to t
            if (!mapST.has(charS)) {
                mapST.set(charS, charT);
            } else if (mapST.get(charS) !== charT) {
                return false;  // Inconsistent mapping from s to t
            }
    
            // Check mapping from t to s
            if (!mapTS.has(charT)) {
                mapTS.set(charT, charS);
            } else if (mapTS.get(charT) !== charS) {
                return false;  // Inconsistent mapping from t to s
            }
        }
    
        return true;
    };
    

console.log(isIsomorphic("paper",'title'));

