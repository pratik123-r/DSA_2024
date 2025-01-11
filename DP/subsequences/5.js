/**
 * https://takeuforward.org/data-structure/count-partitions-with-given-difference-dp-18/
 * 
 * 
Given an array arr[], partition it into two subsets(possibly empty) such that each element must belong to only one subset. Let the sum of the elements of these two subsets be sum1 and sum2. Given a difference d, count the number of partitions in which sum1 is greater than or equal to sum2 and the difference between sum1 and sum2 is equal to d. 
Examples :
Input: arr[] =  [5, 2, 6, 4], d = 3
Output: 1
Explanation: There is only one possible partition of this array. Partition : {6, 4}, {5, 2}. The subset difference between subset sum is: (6 + 4) - (5 + 2) = 3.

Input: arr[] = [1, 1, 1, 1], d = 0 
Output: 6 
Explanation: We can choose two 1's from indices {0,1}, {0,2}, {0,3}, {1,2}, {1,3}, {2,3} and put them in sum1 and remaning two 1's in sum2.
Thus there are total 6 ways for partition the array arr. 
Input: arr[] = [1, 2, 1, 0, 1, 3, 3], d = 11
 */



function perfectSum(arr, d) {
    let sum = arr.reduce((pre, curr)=>pre+curr)
    
    const target = (sum - d)/2
    
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



console.log(perfectSum([5, 2, 6, 4], 3));