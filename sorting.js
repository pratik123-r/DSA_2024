function mergeSortedArr(arr, start, mid, end) {
    let left = start;
    let right = mid+1
    let tempArr = [];
    while (left <= mid && right <= end) {
        if(arr[left] > arr[right]) {
            tempArr.push(arr[right]);
            right ++;
        }else {
            tempArr.push(arr[left]);
            left ++;
        }
    }
    while(left<=mid) {
        tempArr.push(arr[left]);
        left++
    }
    while(right<=end) {
        tempArr.push(arr[right]);
        right++
    }
    for (let index = start; index <= end; index++) {
        arr[index] = tempArr[index - start];
    }
};


function mergeSort(arr, left, right) {
    if(left==right)
        return;
    let mid = Math.floor((left+right)/2)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid+1, right)
    mergeSortedArr(arr, left, mid, right)
}






//------------------------------------------------------------------------------------------------------------------------


function partition(arr, low, high) {
    let pivot = low;
    let i = low;
    let j = high;
    while (i < j) {
        while (arr[i] < arr[pivot] && i <= high) {
            i++;
        }
        while (arr[j] > arr[pivot] && j >= low) {
            j--;
        }
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    let temp = arr[pivot];
    arr[pivot] = arr[j];
    arr[j] = temp;
    return j;
}

function quickSort(arr, low, high) {
    if(low>high)
        return;
    let PI = partition(arr, low, high);
    quickSort(arr, low, PI-1);
    quickSort(arr, PI+1, high);
}

let arr = [9, 4, 7, 6, 3, 1, 5];

quickSort(arr, 0, arr.length-1);
console.log(arr);




