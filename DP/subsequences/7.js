/**
 * 
    https://leetcode.com/problems/coin-change/description/
    https://takeuforward.org/data-structure/minimum-coins-dp-20/
 */



function coinChange(coins, target) {
    const dp = new Map();

    const result = solve(coins, target, coins.length - 1, dp);

    // If result is a large number, it means it's not possible to form the target
    return result === Infinity ? -1 : result;
}

function solve(coins, target, ind, dp) {
    // Base case: if we only have one coin type
    if (ind === 0) {
        if (target % coins[ind] === 0) {
            return Math.floor(target / coins[ind]);
        } else {
            return Infinity;
        }
    }

    // Memoization key
    const dpKey = `${ind}-${target}`;
    if (dp.has(dpKey)) return dp.get(dpKey);

    // Option 1: Do not take the current coin
    const nonTake = solve(coins, target, ind - 1, dp);

    // Option 2: Take the current coin, if possible
    let take = Infinity;
    if (target >= coins[ind]) {
        take = 1 + solve(coins, target - coins[ind], ind, dp);
    }

    // Store the result in the memoization map
    dp.set(dpKey, Math.min(nonTake, take));

    return dp.get(dpKey);
}
