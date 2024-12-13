/*
    Problem Statement: You are given a positive integer n. Your task is to find and return its square root. 
    If ‘n’ is not a perfect square, then return the floor value of 'sqrt(n)'.
 */

function Sqrt(x) {
    let low = 0;
    let high = Math.ceil(x / 2);
    let ans = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (mid * mid <= x) {
            ans = mid
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return ans
}


console.log(Sqrt(8));

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16


