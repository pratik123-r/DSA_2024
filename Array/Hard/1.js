/**
    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
    such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

    Example 1:

    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation: 
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets does not matter.

    Example 2:

    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.

    Example 3:

    Input: nums = [0,0,0]
    Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.
 */



class ArraySet extends Set {
    addArray(array) {
        array.sort((a, b) => a - b)
        let arrayString = JSON.stringify(array);
        if (!this.has(arrayString)) {
            this.add(arrayString);
        }
    }

    getArrays() {
        return Array.from(this).map(item => JSON.parse(item));
    }
}



function threeSum(array, sum) {
    array.sort((a, b) => a - b)
    let arraySet = new ArraySet();
    for (let i = 0; i < array.length; i++) {
        j = i + 1;
        k = array.length - 1;
        while (j < k) {
            if (array[i] + array[j] + array[k] === sum) {
                arraySet.addArray([array[i], array[j], array[k]])
                j++;
                k--;
            } else if (array[i] + array[j] + array[k] < sum) {
                j++
            } else {
                k--
            }
        }
    }
    return arraySet.getArrays()
}
function triplet(arr, n) {
    let ans = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        // remove duplicates:
        if (i !== 0 && arr[i] === arr[i - 1]) continue;

        // moving 2 pointers:
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                let temp = [arr[i], arr[j], arr[k]];
                ans.push(temp);
                j++;
                k--;
                // skip the duplicates:
                while (j < k && arr[j] === arr[j - 1]) j++;
                while (j < k && arr[k] === arr[k + 1]) k--;
            }
        }
    }
    return ans;
}


console.log(triplet([-1, 0, 1, 2, 0,-1, 0,-4,0,0], 0));
