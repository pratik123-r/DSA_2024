function maxSumNonAdjacent(arr) {
    const n = arr.length;
    if (n === 0) return 0; // Edge case: Empty array

    let memo = new Array(n).fill(-1);

    function helper(i) {
        if (i === 0) return arr[0]; // Base case: Only one element
        if (i === 1) return Math.max(arr[0], arr[1]); // Base case: Compare first two elements

        if (memo[i] !== -1) return memo[i]; // Return cached result

        // Recursive case: Include or exclude the current element
        const pick = arr[i] + helper(i - 2)
        const notPick = helper(i - 1)
        memo[i] = Math.max(pick, notPick);
        return memo[i];
    }

    return helper(n - 1); // Start from the last element
}

// Example usage:
const arr = [3, 2, 7, 10];
console.log(maxSumNonAdjacent(arr)); // Output: 13 (3 + 10)

