/*
    Problem Statement: Given an array of intervals, merge all the overlapping 
    intervals and return an array of non-overlapping intervals.

    Example 1:
    Input:
    intervals=[[1,3],[2,6],[8,10],[15,18]]

    Output:
    [[1,6],[8,10],[15,18]]

    Explanation:
    Since intervals [1,3] and [2,6] are overlapping we can merge them to form [1,6]
    intervals.

    Example 2:
    Input:
    [[1,4],[4,5]]

    Output:
    [[1,5]]

    Explanation:
    Since intervals [1,4] and [4,5] are overlapping we can merge them to form [1,5].

*/

function mergeIntervals(arr) {
    let res = [];
    arr.sort((a, b) => a[0] - b[0])
    res.push(arr[0])
    for (let index = 1; index < arr.length; index++) {
        let j = res.length - 1
        if(res[j][1] >= arr[index][0]) {
            res[j][1] = Math.max(arr[index][1], res[j][1]) 
        }else {
            res.push([arr[index][0], arr[index][1]])
        }
    }
    return res;
}


console.log(mergeIntervals([[1,3],[2,6],[15,18], [8,10]]));