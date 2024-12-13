/**
    Problem Statement: Given an array, find the second smallest and second largest element in the array.
                       Print ‘-1’ in the event that either of them doesn’t exist.
    
    Input:
    [1,2,4,7,7,5]
    Output:
    Second Smallest : 2
        Second Largest : 5
    Explanation:
    The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

    Example 2:
    Input:
    [1]
    Output:
    Second Smallest : -1
        Second Largest : -1
    Explanation:
    Since there is only one element in the array, it is the largest and smallest element present in the array. 
    There is no second largest or second smallest element present.
 */

function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -1;
    for (let index = 1; index < arr.length; index++) {
        if(arr[index] > largest) {
            largest = arr[index];
        }
        if(arr[index] > secondLargest && arr[index] < largest) {
            secondLargest = arr[index]
        }
    }
    return secondLargest;

}


console.log(findSecondLargest([1,2,4,7,7,5]));
console.log(findSecondLargest([1]));

