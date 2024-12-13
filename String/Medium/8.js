/**
  1781. Sum of Beauty of All Substrings

    The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

    For example, the beauty of "abaacc" is 3 - 1 = 2.
    Given a string s, return the sum of beauty of all of its substrings.

    

    Example 1:

    Input: s = "aabcb"
    Output: 5
    Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.
    Example 2:

    Input: s = "aabcbaa"
    Output: 17
 */

function beauty(str) {
    let ans = 0
    for (let i = 0; i < str.length; i++) {
        let map = new Map();
        for (let j = i; j < str.length; j++) {
            map.set(str[j], (map.get(str[j]) || 0) + 1)
            let max = Number.MIN_VALUE;
            let min = Number.MAX_VALUE;
            for (const [x, a] of map.entries()) {
                max = Math.max(a, max);
                min = Math.min(a, min)
            }
            ans += max - min
        }
    }
    return ans
}

console.log(beauty('aabcbaa'));