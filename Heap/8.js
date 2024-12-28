/**
 * 
Given a rod of length n(size of price) inches and an array of prices, price. price[i] denotes the value of a piece of length i.
Determine the maximum value obtainable by cutting up the rod and selling the pieces.

Input: price[] = [1, 5, 8, 9, 10, 17, 17, 20]
Output: 22
Explanation: The maximum obtainable value is 22 by cutting in two pieces of lengths 2 and 6, i.e., 5+17=22.

Input: price[] = [3, 5, 8, 9, 10, 17, 17, 20]
Output: 24
Explanation: The maximum obtainable value is 24 by cutting the rod into 8 pieces of length 1, i.e, 8*price[1]= 8*3 = 24.

Input: price[] = [1, 10, 3, 1, 3, 1, 5, 9]
Output: 40

 */


function rodCutting(price, n) {
    // Base case: if the rod length is 0, no value can be obtained
    if (n == 0) {
        return 0;
    }
    let maxValue = 0;
    
    

    // Try all possible cuts
    for (let i = 1; i <= n; i++) {
        // Recursively calculate the value for the remaining rod length (n - i)
        let currentValue = price[i - 1] + rodCutting(price, n - i);
        
        maxValue = Math.max(maxValue, currentValue);
    }

    return maxValue;
}


// Example usage
const price = [1, 5, 8, 9]; // Price for lengths 1, 2, 3, 4
const rodLength = price.length;

console.log("Maximum Value:", rodCutting(price, rodLength)); // Output: Maximum Value: 10

