/**
 * 
    https://www.geeksforgeeks.org/problems/geek-jump/1
    1 jump or 2 jump

    Input: n = 4, height = {10 20 30 10}

    Output: 20

    Explanation:
    Geek jump from 1st to 2nd stair(|20-10| = 10 energy lost). 
    Then a jump from the 2nd to the last stair(|10-20| = 10 energy lost).
    So, total energy lost is 20 which is the minimum.
 */


function minEnergy(height) {
    let memo = new Array(height.length).fill(-1);

    function helper(i) {
        if (i === 0) return 0; // Base case
        if (i === 1) return Math.abs(height[1] - height[0]); // Base case

        if (memo[i] !== -1) return memo[i]; // Return cached result if exists

        const oneStep = helper(i - 1) + Math.abs(height[i] - height[i - 1]);
        const twoSteps = helper(i - 2) + Math.abs(height[i] - height[i - 2]);

        memo[i] = Math.min(oneStep, twoSteps); // Store result in memo
        return memo[i];
    }

    return helper(height.length - 1);
}
console.log(minEnergy([30, 10, 60, 10, 60, 50]));




