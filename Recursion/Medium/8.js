/**
 * 17. Letter Combinations of a Phone Number
 * 
    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
    A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

    Example 1:
    Input: digits = "23"
    Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

    Example 2:
    Input: digits = ""
    Output: []

    Example 3:
    Input: digits = "2"
    Output: ["a","b","c"]
 */


var letterCombinations = function (digits) {
    let map = {
        "2": 'abc',
        "3": 'def',
        "4": 'ghi',
        "5": 'jkl',
        "6": 'mno',
        "7": 'pqrs',
        "8": 'tuv',
        "9": 'wxyz'
    }
    let ans = []
    digits = digits.toString()
    util(digits, map, '', ans, 0)
    console.log(ans);
};

var util = function (digits, map, ds, ans, ind) {
    if (digits.length === ds.length && ds.length) {
        ans.push(ds)
        return
    }
    for (let j = 0; j < map[digits[ind]].length; j++) {
        util(digits, map, ds + map[digits[ind]][j], ans, ind + 1)
    }
};

letterCombinations(234)