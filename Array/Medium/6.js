/*
    Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

    Example 1:
    Input:
    prices = [7,1,5,3,6,4]
    Output:
    5
    Explanation:
    Buy on day 2 (price = 1) and 
    sell on day 5 (price = 6), profit = 6-1 = 5.

    Note
    : That buying on day 2 and selling on day 1 
    is not allowed because you must buy before 
    you sell.

    Example 2:
    Input:
    prices = [7,6,4,3,1]
    Output:
    0
    Explanation:
    In this case, no transactions are 
    done and the max profit = 0.

 */

function maxProfit(arr) {
    let maxProfit = 0;
    let minPrice = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < arr.length; i++) {
        minPrice = Math.min(minPrice, arr[i])
        maxProfit = Math.max(maxProfit, arr[i] - minPrice)
    }
    return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]));