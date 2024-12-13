/**
    Two Sum : Check if a pair with given sum exists in Array
    

    Example 1:
    Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
    Result: YES (for 1st variant)
        [1, 3] (for 2nd variant)
    Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

    Example 2:
    Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
    Result: NO (for 1st variant)
        [-1, -1] (for 2nd variant)
    Explanation: There exist no such two numbers whose sum is equal to the target.
 */

function twoSum(arr, sum) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if(map.has(sum - arr[i])){
            return [map.get(sum - arr[i]), i];
        }
        map.set(arr[i], i)
    }
    return [];
}
console.log(twoSum([2,6,5,8,11], 14));