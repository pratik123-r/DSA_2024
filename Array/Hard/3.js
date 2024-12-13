/*

    Problem Statement: Given an array that contains both negative and positive integers, find the maximum product subarray.

    Example 1:
    Input:

    Nums = [1,2,3,4,5,0]
    Output:

    120
    Explanation:

    In the given array, we can see 1×2×3×4×5 gives maximum product value.


    Example 2:
    Input:
    Nums = [1,2,-3,0,-4,-5]
    Output:

    20
    Explanation:

    In the given array, we can see (-4)×(-5) gives maximum product value.

 */

function maxProduct(arr) {
    let maxProduct = arr[0];
    let product = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if(arr[index] === 0) {
            maxProduct = Math.max(maxProduct, arr[index]);
            product = 1;
            continue;
        }else {
            product *= arr[index]
        }
        product = Math.max(arr[index], product)
        maxProduct = Math.max(maxProduct, product);
    }
    return Math.max(maxProduct);
}

console.log(maxProduct([-2, 0, -1]));