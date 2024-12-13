/**
 *  Aggressive Cows : Detailed Solution

    Example 1:
    Input Format:
    N = 6, k = 4, arr[] = {0,3,4,7,10,9}
    Result:
    3
    Explanation:
    The maximum possible minimum distance between any two cows will be 3 when 4 cows are placed at positions {0, 3, 7, 10}. Here the distances between cows are 3, 4, and 3 respectively. We cannot make the minimum distance greater than 3 in any ways.

    Example 2:
    Input Format:
    N = 5, k = 2, arr[] = {4,2,1,3,6}
    Result:
    5
    Explanation:
    The maximum possible minimum distance between any two cows will be 5 when 2 cows are placed at positions {1, 6}. 

 */

function aggressiveCows(arr, k) {
    arr.sort((a,b)=>a-b)
    let low = arr[0];
    let high = arr[arr.length-1];
    let ans;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (isPossible(arr, mid, k)) {
            ans = mid
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans
}

function isPossible(array, distance, k) {
    let cow = array[0];
    k--
    for (let index = 1; index < array.length; index++) {
        if(array[index] - cow >= distance) {
            k--;
            cow = array[index];
        }
    }
    return k==0;
}

console.log(aggressiveCows([0,3,4,7,10,9], 4));