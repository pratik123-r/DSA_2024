/**
 * Non-overlapping Intervals
 * 
    Given an array of intervals intervals where intervals[i] = [starti, endi], 
    return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

    Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.
    Example 1:
    Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
    Output: 1
    Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

    Example 2:
    Input: intervals = [[1,2],[1,2],[1,2]]
    Output: 2
    Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

    Example 3:
    Input: intervals = [[1,2],[2,3]]
    Output: 0
    Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

 */

/**
* @param {number[][]} intervals
* @return {number}
*/
var eraseOverlapIntervals = function (intervals) {
    let ans = 0;
    let lastEndTime = Number.MIN_SAFE_INTEGER;
    intervals.sort((a, b) => a[1] - b[1]);    
    for (let index = 0; index < intervals.length; index++) {
        if (intervals[index][0] >= lastEndTime) {
            ans++; 
            lastEndTime = intervals[index][1];
        }
    }
    return intervals.length - ans; 
};

eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])