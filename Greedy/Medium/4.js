/**
   You are given the arrival times arr[] and departure times dep[] of all trains that arrive at a railway station on the same day. 
   Your task is to determine the minimum number of platforms required at the station to ensure that no train is kept waiting.

    At any given time, the same platform cannot be used for both the arrival of one train 
    and the departure of another. Therefore, when two trains arrive at the same time, or when one arrives before another departs, 
    additional platforms are required to accommodate both trains.


    Input: arr[] = [900, 940, 950, 1100, 1500, 1800], dep[] = [910, 1200, 1120, 1130, 1900, 2000]
    Output: 3
    Explanation: There are three trains during the time 9:40 to 12:00. So we need a minimum of 3 platforms.

    Input: arr[] = [1000, 935, 1100], dep[] = [1200, 1240, 1130]
    Output: 3
    Explanation: All 3 trains have to be there from 11:00 to 11:30
 */


function findPlatform(arr, dep) {
    arr.sort((a, b) => a - b)
    dep.sort((a, b) => a - b)
    let ai = 0
    let di = 0
    let ans = 0
    let count = 0;
    while (ai < arr.length && di < dep.length) {
        if (arr[ai] < dep[di]) {
            ai++
            count++
        } else {
            di++
            count--
        }
        ans = Math.max(count, ans)
    }
    return ans
}

findPlatform([900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1130, 1900, 2000])