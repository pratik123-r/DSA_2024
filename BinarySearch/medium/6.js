/*
    Problem Statement: You are the owner of a Shipment company. You use conveyor belts to ship packages from one port to another. 
    The packages must be shipped within 'd' days.

    Example 1:
    Input Format:
    N = 5, weights[] = {5,4,5,2,3,4,5,6}, d = 5
    Result:
    9
    Explanation:
    If the ship capacity is 9, the shipment will be done in the following manner:
    Day         Weights            Total
    1        -       5, 4          -        9
    2        -       5, 2          -        7
    3        -       3, 4          -        7
    4        -       5             -        5
    5        -       6             -        6
    So, the least capacity should be 9.

    Example 2:
    Input Format:
    N = 10, weights[] = {1,2,3,4,5,6,7,8,9,10}, d = 1
    Result:
    55
    Explanation:
    We have to ship all the goods in a single day. So, the weight capacity should be the summation of all the weights i.e. 55.

 */

function minWeigthToShip(arr, day) {
    let low = Math.max(...arr);
    let high = arr.reduce((a, b) => a + b, 0);
    let ans = 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (isPossible(arr, mid, day)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans
}

function isPossible(array, limit, day) {
    let sum = 0;
    let countDay = 1
    for (let index = 0; index < array.length; index++) {
        if(sum + array[index] > limit) {
            sum = array[index]
            countDay++;
        } else {
            sum += array[index];
        }
    }

    return day >= countDay;
}

console.log(minWeigthToShip([5,4,5,2,3,4,5,6], 5));