/**
 *  Insert Interval
 * 
    Example 1:
    Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
    Output: [[1,5],[6,9]]

    Example 2:
    Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
    Output: [[1,2],[3,10],[12,16]]
    Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */

var insert = function (intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a, b) => a[0] - b[0])
    let ans = []
    ans.push(intervals[0])
    for (let i = 0; i < intervals.length; i++) {
        let j = ans.length - 1;
        if(ans[j][1] >= intervals[i][0]) {
            ans[j][1] = Math.max(ans[j][1], intervals[i][1])
        }else {
            ans.push(intervals[i])
        }
        
    }
    return ans
};
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));


