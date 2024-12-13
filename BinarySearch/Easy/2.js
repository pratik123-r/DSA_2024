
{
    function upperBound(arr, x, n) {
        let low = 0, high = n - 1;
        let ans = -1; // Initialize ans to -1, indicating no ceil found initially

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            // If arr[mid] is greater than or equal to x, it's a potential ceil
            if (arr[mid] >= x) {
                ans = mid; // Record this as the current ceil
                high = mid - 1; // Move left to find a smaller ceil
            }
            else {
                low = mid + 1;  // Move right if arr[mid] is less than x
            }
        }

        return ans;

    }

    let arr = [3, 5, 8, 9, 15, 19];
    let n = 6, x = 9;
    let ind = upperBound(arr, x, n);
    console.log("The upper bound is the index:", ind);

}




function lowerBound(arr, n, x) {
    let low = 0, high = n - 1;
    let ans = -1; // Initialize ans to -1, indicating no floor found initially

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If arr[mid] is less than or equal to x, it's a potential floor
        if (arr[mid] <= x) {
            ans = mid; // Record this as the current floor
            low = mid + 1;  // Move right to find a larger floor
        }
        else {
            high = mid - 1; // Move left if arr[mid] is greater than x
        }
    }

    return ans;
}

let arr = [3, 5, 8, 15, 19];
let n = 5, x = 9;
let ind = lowerBound(arr, n, x);
console.log("The lower bound is the index:", ind);

