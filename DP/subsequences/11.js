/**
 * https://takeuforward.org/data-structure/rod-cutting-problem-dp-24/
 * https://www.geeksforgeeks.org/problems/rod-cutting0840/1
 */


function cutRod(price) {
    const dp = new Map()
    return rodCutting(price, price.length, dp)
}

function rodCutting(price, n, dp) {    
    // Base case: if the rod length is 0, no value can be obtained
    if (n == 0) {
        return 0;
    }
    let maxValue = 0;
    
    if(dp.has(n))
        return dp.get(n)

    // Try all possible cuts
    for (let i = 1; i <= n; i++) {
        // Recursively calculate the value for the remaining rod length (n - i)
        let currentValue = price[i - 1] + rodCutting(price, n - i, dp);
        
        maxValue = Math.max(maxValue, currentValue);
    }

    dp.set(n, maxValue)

    return maxValue;
}


class Solution {
    cutRod(price) {
        const n = price.length;
        const dp = new Map(); // Using Map for memoization
        return this.pickLeave(n - 1, n, price, dp);
    }

    pickLeave(idx, remainingLength, price, dp) {
        // Base case: If we are at the first index
        if (idx === 0) {
            return remainingLength * price[0];
        }

        // Memoization key
        const dpKey = `${idx}-${remainingLength}`;

        // Check if the result for this state is already computed
        if (dp.has(dpKey)) return dp.get(dpKey);

        // Option 1: Do not pick the current piece
        let notPick = this.pickLeave(idx - 1, remainingLength, price, dp);

        // Option 2: Pick the current piece, if possible
        let pick = Number.MIN_SAFE_INTEGER;
        const rodLength = idx + 1; // Length of the rod piece represented by `idx`
        if (remainingLength >= rodLength) {
            pick = price[idx] + this.pickLeave(idx, remainingLength - rodLength, price, dp);
        }

        // Store the result in the Map and return the maximum of the two options
        dp.set(dpKey, Math.max(notPick, pick));
        return dp.get(dpKey);
    }
}


console.log(cutRod([1, 5, 8, 9, 10, 17, 17, 20]));


