/**
    Problem Statement: Given an array consisting of only 0s, 1s, and 2s. 
    Write a program to in-place sort the array without using inbuilt sort functions. 
    ( Expected: Single pass-O(N) and constant space)
 */

function sort(arr) {
    let first = 0;
    let last = arr.length - 1;
    let window = 0;

       while (first <= last) {

        if (arr[first] == 1) {
            first ++;
        } else if (arr[first] == 0) {

            let temp = arr[first];
            arr[first] = arr[window];
            arr[window] = temp;

            first ++;
            window ++;
        } else  {
            let temp = arr[first];
            arr[first] = arr[last];
            arr[last] = temp;
            last --;
        }

    }
}



console.log(sort([2,0,2,1,1,0]));