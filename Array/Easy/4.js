/**
    Problem Statement: Given an integer array sorted in non-decreasing order, 
                       remove the duplicates in place such that each unique element appears only once. 
                       The relative order of the elements should be kept the same.
 */

function removeDuplicates(array) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if(array[j] != array[i]) {
            i++;
            array[i] = array[j]
        }
    }
    return i;
}

const arr = [1, 1, 2, 2, 2, 3, 3];
const k = removeDuplicates(arr);
for (let index = 0; index <= k; index++) {
    console.log(arr[index]);
}