/**
 * Problem Statement: Given two numbers N and M, find the Nth root of M. 
 * The nth root of a number M is defined as a number X when raised to the power N equals M. 
 * If the 'nth root is not an integer, return -1.
 */

 function nthRoot(x, root) {
    let low = 0;
    let high = x;
    let ans = -1; 
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (Math.pow(mid, root) <= x) {
            ans = mid
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return ans
}


console.log(nthRoot(8, 3));