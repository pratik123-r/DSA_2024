/**
https://takeuforward.org/data-structure/3-d-dp-ninja-and-his-friends-dp-13/
 */


function maxChocolates(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Create a memoization table
    const memo = new Map();

    // Helper function to construct a unique key for memoization
    function getKey(row, col1, col2) {
        return `${row},${col1},${col2}`;
    }

    // Recursive function
    function dp(row, col1, col2) {
        // If out of bounds, return a very small value
        if (col1 < 0 || col1 >= cols || col2 < 0 || col2 >= cols) {
            return -Infinity;
        }

        // Base case: If we're on the last row
        if (row === rows - 1) {
            if (col1 === col2) {
                return grid[row][col1]; // Both robots are on the same cell
            } else {
                return grid[row][col1] + grid[row][col2];
            }
        }

        // Check if the result is already memoized
        const key = getKey(row, col1, col2);
        if (memo.has(key)) {
            return memo.get(key);
        }

        // Explore all possible moves for both robots
        let maxChocolates = -Infinity;
        for (let d1 of [-1, 0, 1]) { // Moves for robot 1
            for (let d2 of [-1, 0, 1]) { // Moves for robot 2
                let ans;
                // Add chocolates for the current cell
                if (col1 === col2) {
                    ans = grid[row][col1] + dp(row + 1, col1 + d1, col2 + d2)
                } else {
                    ans = grid[row][col1] + grid[row][col2] + dp(row + 1, col1 + d1, col2 + d2);
                }
                maxChocolates = Math.max(ans, maxChocolates)
            }
        }



        // Store the result in the memoization table
        memo.set(key, maxChocolates);

        return maxChocolates;
    }

    // Start the recursion from the top row
    return dp(0, 0, cols - 1);
}
