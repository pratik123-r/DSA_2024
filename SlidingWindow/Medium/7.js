/**
 * Maximum Points You Can Obtain from Cards
 * 
 * 
    Example 1:
    Input: cardPoints = [1,2,3,4,5,6,1], k = 3
    Output: 12
    Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

    Example 2:
    Input: cardPoints = [2,2,2], k = 2
    Output: 4
    Explanation: Regardless of which two cards you take, your score will always be 4.

    Example 3:
    Input: cardPoints = [9,7,7,9,7,7,9], k = 7
    Output: 55
    Explanation: You have to take all the cards. Your score is the sum of points of all cards.

 */


var maxScore = function (arr, k) {
    let minSum = Number.MAX_VALUE
    let minSumLen = arr.length - k;
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i]
    }
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (i >= arr.length - k - 1) {
            minSum = Math.min(sum, minSum)
            sum -= arr[i - arr.length + k + 1]
        }
    }
    return totalSum - minSum

};
