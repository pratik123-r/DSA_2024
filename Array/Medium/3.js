/*
    Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. 
    You may consider that such an element always exists in the array.

    Example 1:
    Input Format
    : N = 3, nums[] = {3,2,3}
    Result
    : 3
    Explanation
    : When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution. 

    Example 2:
    Input Format:
    N = 7, nums[] = {2,2,1,1,1,2,2}

    Result
    : 2

    Explanation
    : After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

    Example 3:
    Input Format:
    N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}

    Result
    : 4
 */




function majorityElement(arr) {
    // Size of the given array
    let n = arr.length;
    let cnt = 0; // Count
    let el; // Element

    // Applying the algorithm
    for (let i = 0; i < n; i++) {
        if (cnt === 0) {
            cnt = 1;
            el = arr[i];
        } else if (el === arr[i]) {
            cnt++;
        } else {
            cnt--;
        }
    }

    // Checking if the stored element is the majority element
    let cnt1 = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === el) {
            cnt1++;
        }
    }

    if (cnt1 > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}

let arr = [2, 2, 1, 1, 1, 2, 2];
let ans = majorityElement(arr);
console.log("The majority element is:", ans);
    
    