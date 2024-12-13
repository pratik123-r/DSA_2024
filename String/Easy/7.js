/**
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    Example 1:

    Input: s = "anagram", t = "nagaram"

    Output: true

    Example 2:

    Input: s = "rat", t = "car"

    Output: false
 */

var isAnagram = function (s, t) {
    if (s.length !== t.length)
        return false
    let arr = new Array(26)
    arr = arr.fill(0)
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 97] += 1;
        arr[t.charCodeAt(i) - 97] -= 1;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0)
            return false
    }
    return true;
};
console.log(isAnagram('anagram', 'nagaram'));