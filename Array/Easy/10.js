/**
    Problem Statement: Given an array that contains only 1 and 0 return 
                        the count of maximum consecutive ones in the array.
 */

function maxOne(arr) {
    let max = -1;
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 1) {
            count ++;
            max = Math.max(count, max)
        } else {
            count = 0;
        }
    }
    return max
}

console.log(maxOne([1,1,0,1,1,1]));