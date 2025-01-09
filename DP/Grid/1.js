
/**
 * 
https://takeuforward.org/data-structure/grid-unique-paths-dp-on-grids-dp8/
 */



function ninjaTraining(day, prevtask, grid, dp = {}) {

    if (day === 0) {
        let max = 0;
        for (let i = 0; i < grid[0].length; i++) {
            if (i != prevtask) {
                max = Math.max(grid[0][i], max);
            }
        }
        return max;
    }

    const dpKey = `${day}-${prevtask}`; // Create a unique key for the object
    if (dp[dpKey] !== undefined) return dp[dpKey];

    let max = 0;
    for (let i = 0; i < grid[0].length; i++) {
        if (i != prevtask) {
            const ans = grid[day][i] + ninjaTraining(day - 1, i, grid, dp);
            max = Math.max(ans, max);
        }
    }
    dp[dpKey] = max; // Store the result in the object
    return max;
}
let arr = [[1,2,5],[3,1,1],[3,3,3]]


console.log(ninjaTraining(arr.length-1, arr[0].length, arr, {}));

