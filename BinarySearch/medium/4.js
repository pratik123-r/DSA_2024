/**
    Problem Statement: You are given 'N’ roses and you are also given an array 'arr'  where 'arr[i]'  
    denotes that the 'ith' rose will bloom on the 'arr[i]th' day.You can only pick already bloomed roses
    that are adjacent to make a bouquet. You are also told that you require exactly 'k' adjacent bloomed 
    roses to make a single bouquet. Find the minimum number of days required to make at least ‘m' 
    bouquets each containing 'k' roses. Return -1 if it is not possible.

    Example 1:
    Input Format:
    N = 8, arr[] = {7, 7, 7, 7, 13, 11, 12, 7}, m = 2, k = 3
    Result:
    12
    Explanation:
    On the 12th the first 4 flowers and the last 3 flowers would have already bloomed. So, we can easily make 2 bouquets, one with the first 3 and another with the last 3 flowers.

    Example 2:
    Input Format:
    N = 5, arr[] = {1, 10, 3, 10, 2}, m = 3, k = 2
    Result:
    -1
    Explanation:
    If we want to make 3 bouquets of 2 flowers each, we need at least 6 flowers. But we are given only 5 flowers, so, we cannot make the bouquets.

 */

function minDayToBloomed(arr, totalGrp, itemInGroup) {
    let low = Math.min(...arr)
    let high = Math.max(...arr)
    let ans = 1;
    if(totalGrp*itemInGroup > arr.length)
        return -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (calculateGroup(arr, mid, itemInGroup) >= totalGrp) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans
}
function calculateGroup(arr, day, itemInGroup) {
    let ans = 0
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] <= day) {
            count ++;
        } else {
            ans += Math.floor(count/itemInGroup);
            count = 0;
        } 
    }
    ans += Math.floor(count/itemInGroup);
    return ans
}


console.log((minDayToBloomed([7, 7, 7, 7, 13, 11, 12, 7], 2, 3))); // [1 1 1], [1,1,1]
