/**
    Combination Sum 3 - Find all unique combinations
    Example 1:

    Input: k = 3, n = 7
    Output: [[1,2,4]]
    Explanation:
    1 + 2 + 4 = 7
    There are no other valid combinations.
    Example 2:

    Input: k = 3, n = 9
    Output: [[1,2,6],[1,3,5],[2,3,4]]
    Explanation:
    1 + 2 + 6 = 9
    1 + 3 + 5 = 9
    2 + 3 + 4 = 9
    There are no other valid combinations.
    Example 3:

    Input: k = 4, n = 1
    Output: []
    Explanation: There are no valid combinations.
    Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
 */


function util(index, target, k, ds, ans) {
    if (ds.length === k && target === 0) {
        ans.push([...ds])
        return
    }

    for (let i = index; i <= 9; i++) {
        if (i > target)
            break
        ds.push(i)
        util(i+1, target-i, k, ds, ans)
        ds.pop()
    }
}

function combinationSum() {
    let k = 3, target = 9
    let ans = []
    util(1, target, k, [], ans)
    console.log(ans);
}

combinationSum()