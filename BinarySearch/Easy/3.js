

function searchInARotatedSortedArrayII(arr, k) {
    let n = arr.length; // size of the array.
    let low = 0, high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        //if mid points the target
        if (arr[mid] === k) return true;

        //Edge case:
        if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
            low = low + 1;
            high = high - 1;
            continue;
        }

        //if left part is sorted:
        if (arr[low] <= arr[mid]) {
            if (arr[low] <= k && k <= arr[mid]) {
                //element exists:
                high = mid - 1;
            }
            else {
                //element does not exist:
                low = mid + 1;
            }
        }
        else { //if right part is sorted:
            if (arr[mid] <= k && k <= arr[high]) {
                //element exists:
                low = mid + 1;
            }
            else {
                //element does not exist:
                high = mid - 1;
            }
        }
    }
    return false;
}

let arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6];
let k = 3;
let ans = searchInARotatedSortedArrayII(arr, k);
if (!ans) {
    console.log("Target is not present.");
} else {
    console.log("Target is present in the array.");
}

