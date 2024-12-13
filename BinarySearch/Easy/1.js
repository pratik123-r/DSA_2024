/**
 * Binary Search
 * 
 *  {3, 4, 6, 7, 9, 12, 16, 17} and target = 6.
 */


function binarySearch(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left+right)/2)
        if(arr[mid] === x)
            return mid;
        else if(arr[mid] < x) 
            left = mid + 1
        else 
            right = mid - 1;
    }
    return null;
}

console.log(binarySearch([3, 4, 6, 7, 9, 12, 16, 17], 12));