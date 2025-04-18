/**
 * 
 */


function frogJumpK(height, k) {
    const n = height.length;
    let memo = new Array(n).fill(-1);

    function helper(i) {
        if (i === 0) return 0; // Base case: 0th stair

        if (memo[i] !== -1) return memo[i]; // Return cached result if already computed

        let minEnergy = Infinity;
        
        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) {
                const jumpEnergy = helper(i - j) + Math.abs(height[i] - height[i - j]);
                minEnergy = Math.min(minEnergy, jumpEnergy);
            }
        }

        memo[i] = minEnergy; // Store the result in memo
        return memo[i];
    }

    return helper(n - 1);
}


frogJumpK([30, 10, 60, 10, 60, 50], 3)
