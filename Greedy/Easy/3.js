function minimumCoins(coins, targetSum) {
    // Sort coins in descending order
    coins.sort((a, b) => b - a);
    
    let count = 0;  // To count the number of coins
    let remainingSum = targetSum;

    for (let coin of coins) {
        if (coin <= remainingSum) {
            // Use as many of this coin as possible
            let numCoins = Math.floor(remainingSum / coin);
            count += numCoins;
            remainingSum -= numCoins * coin;
        }
    }

    // If the remaining sum is not zero, it's not possible to make the target sum
    return remainingSum === 0 ? count : -1;
}

// Examples
console.log(minimumCoins([25, 10, 5], 30));  // Output: 2
console.log(minimumCoins([9, 6, 5, 1], 19)); // Output: 3
console.log(minimumCoins([5, 1], 0));        // Output: 0
console.log(minimumCoins([4, 6, 2], 5));     // Output: -1
