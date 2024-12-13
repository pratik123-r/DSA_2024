/**
    Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
    Example 1:
    Input:

    n = 5,m = 5.
    arr1[] = {1,2,3,4,5}  
    arr2[] = {2,3,4,4,5}
    Output:

    {1,2,3,4,5}

    Explanation: 

    Common Elements in arr1 and arr2  are:  2,3,4,5
    Distnict Elements in arr1 are : 1
    Distnict Elemennts in arr2 are : No distinct elements.
    Union of arr1 and arr2 is {1,2,3,4,5} 

    Example 2:
    Input:

    n = 10,m = 7.
    arr1[] = {1,2,3,4,5,6,7,8,9,10}
    arr2[] = {2,3,4,4,5,11,12}
    Output:
    {1,2,3,4,5,6,7,8,9,10,11,12}
    Explanation:
    
    Common Elements in arr1 and arr2  are:  2,3,4,5
    Distnict Elements in arr1 are : 1,6,7,8,9,10
    Distnict Elemennts in arr2 are : 11,12
    Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12} 
 */

function unionArray(arr1, arr2) {
    let i = 0;
    let j = 0;
    let arr = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            if (arr1[i] !== arr[arr.length - 1])
                arr.push(arr1[i])
            i++;
            j++;
        } else if (arr1[i] > arr2[j]) {
            if (arr2[j] !== arr[arr.length - 1])
                arr.push(arr2[j])
            j++;
        } else if (arr1[i] < arr2[j]) {
            if (arr1[i] !== arr[arr.length - 1])
                arr.push(arr1[i])
            i++;
        }
    }
    while (i < arr1.length) {
        if (arr1[i] !== arr[arr.length - 1])
            arr.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        if (arr2[j] !== arr[arr.length - 1])
            arr.push(arr2[j])
        j++;
    }
    return arr;
}

let arr = unionArray([1,2,3,4,5,6,7,8,9,10], [2,3,4,4,5,11,12])
console.log(arr);
