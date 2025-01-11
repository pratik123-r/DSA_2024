/**
 * https://takeuforward.org/data-structure/count-subsets-with-sum-k-dp-17/
 */

function perfectSum(arr, target) {
    const dp = new Map();
    return findWaysUtil(arr.length - 1, target, arr, dp);
}

function findWaysUtil(ind, target, arr, dp) {

    if (ind < 0){
        return  target ==0 ? 1 : 0;
    }
        

    const dpKey = `${ind}-${target}`;

    // If the result is already computed for the current state, return it
    if (dp.has(dpKey)) {
        return dp.get(dpKey);
    }

    const notTaken = findWaysUtil(ind - 1, target, arr, dp);

    let taken = 0;
    if (arr[ind] <= target)
        taken = findWaysUtil(ind - 1, target - arr[ind], arr, dp);

    dp.set(dpKey, notTaken + taken);

    // Return the result for the current state
    return notTaken + taken;
}



console.log(perfectSum([28, 4, 3, 27, 0, 24, 26], 24));
// console.log(perfectSum([0,0,0], 0));
