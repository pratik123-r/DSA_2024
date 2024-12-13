/**
 * Combination Sum II - Find all unique combinations
 * 
   Problem Statement: Given a collection of candidate numbers (candidates) and a target number (target), 
   find all unique combinations in candidates where the candidate numbers sum to target. 
   Each number in candidates may only be used once in the combination.

    Example 1:

    Input: candidates = [10,1,2,7,6,1,5], target = 8

    Output: 
    [
    [1,1,6],
    [1,2,5],
    [1,7],
    [2,6]]


    Explanation: These are the unique combinations whose sum is equal to target.
    
    Example 2:

    Input: candidates = [2,5,2,1,2], target = 5

    Output: [[1,2,2],[5]]

    Explanation: These are the unique combinations whose sum is equal to target.
 */


function util(arr, target, ds, ans, index) {

    if (target === 0) {
        ans.push([...ds])
    }

    for (let i = index; i < arr.length; i++) {
        if (i > index && arr[i] === arr[i - 1])
            continue;
        if (arr[i] > target)
            break
        ds.push(arr[i])
        util(arr, target - arr[i], ds, ans, i + 1)
        ds.pop()
    }
}

function combinationSum() {

    let arr = [10, 1, 2, 7, 6, 1, 5];
    arr.sort((a, b) => a - b)
    let ans = []
    let target = 8;
    util(arr, target, [], ans, 0)
    console.log(ans);
}

combinationSum()