/**
 * Given an array of positive integers, arr[] and a value, target, determine if there is a subset of the given set with sum equal to given target. 
    Input: arr[] = [3, 34, 4, 12, 5, 2], target = 9
    Output: true 
    Explanation: Here there exists a subset with target sum = 9, 4+3+2 = 9.

    Input: arr[] = [3, 34, 4, 12, 5, 2], target = 30
    Output: false
    Explanation: There is no subset with target sum 30.

    Input: arr[] = [1, 2, 3], sum = 6
    Output: true
    Explanation: The entire array can be taken as a subset, giving 1 + 2 + 3 = 6.
 */


function canPartition(nums, target) {
    let sum = 0
    for(let i=0; i<nums.length; i++) {
        sum += nums[i]
    }
    if(sum % 2 != 0){
        return false
    }
    const dp = new Map(); 
    let ans = sol(nums.length - 1, nums, sum/2, dp);
    return ans
    
}

function sol(ind, arr, target, dp) {
    // Base case: If target is 0, it means we can achieve it with an empty subset
    if (target === 0) {
        return true;
    }

    // Base case: If we run out of elements (index < 0) and target is not 0, return false
    if (ind < 0) {
        return false;
    }

    // Memoization key based on current index and target
    const dpKey = `${ind}-${target}`;

    // If the result is already computed for the current state, return it
    if (dp.has(dpKey)) {
        return dp.get(dpKey);
    }

    // Option 1: Don't include arr[ind] in the subset
    const notPick = sol(ind - 1, arr, target, dp);

    // Option 2: Include arr[ind] in the subset, if it's not greater than target
    const pick = target >= arr[ind] ? sol(ind - 1, arr, target - arr[ind], dp) : false;

    // Store the result in the memoization table
    dp.set(dpKey, notPick || pick);

    // Return the result for the current state
    return notPick || pick;
}

console.log(canPartition([72,77,17,63,79,95,57,40,82,39,77,20,91,41,66,78,69,94,28,2,48,35,40,32,34,65,18,56,71,15,28,18,43,41,41,50,2,86,77,11,62,56,91,77,56,61,63,39,31,52,48,65,96,97,37,50,36,88,82,75,14,41,36,12,68,1,60,1,1,40,34,75,27,73,100,13,92,93,60,64,60,65,66,56,3,63,95,3,83,73,65,73,7,63,58,57,34,26,78,99], 9));





