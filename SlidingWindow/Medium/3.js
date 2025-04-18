/**
 * 424. Longest Repeating Character Replacement
 * 
 * 
    Example 1:
    Input: s = "ABAB", k = 2
    Output: 4
    Explanation: Replace the two 'A's with two 'B's or vice versa.

    Example 2:
    Input: s = "AABABBA", k = 1
    Output: 4
    Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
    The substring "BBBB" has the longest repeating letters, which is 4.
    There may exists other ways to achieve this answer too.
 */

//naive
// var characterReplacement = function (str, k) {
//     let ans = 0;
//     for (let s = 0; s < str.length; s++) {
//         let map = new Map()
//         let maxSubStr = 0
//         for (let e = s; e < str.length; e++) {
//             map.set(str[e], (map.get(str[e]) || 0) + 1)
//             let maxChar = Math.max(...map.values())
//             if((e-s+1) - maxChar <= k) {
//                 maxSubStr = e-s+1
//             }else {
//                 break
//             }
//         }
//         ans = Math.max(ans, maxSubStr)

//     }
//     return ans;
// };

var characterReplacement = function (str, k) {
    let ans = 0;
    let s = 0;
    let map = new Map()
    for (let e = 0; e < str.length; e++) {
        map.set(str[e], (map.get(str[e]) || 0) + 1)
        let maxChar = Math.max(...map.values())
            if ((e-s+1) - maxChar > k) {
                if(map.get(str[s]) > 0) {
                    map.set(str[s], map.get(str[s])-1)
                }else {
                    map.delete(str[s])
                }
                s++
            }
        
        ans = Math.max(ans, e-s+1)
    }
    return ans
}


console.log(characterReplacement("AABABBA", 1));


