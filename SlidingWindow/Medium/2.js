/**

    You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array of arr[], where arr[i]  is the type of fruit the ith tree produces.
    You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow :

    You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
    Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of the baskets.
    Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
    Given the integer array of fruits, return the maximum number of fruits you can pick.
    
    arr = [3,3,3,1,2,1,1,2,3,3,4] => 1,2,1,1,2

    arr = [1,2,1,2,1,1,3,1,1,1,1,1] => 1,1,3,1,1,1,1,1

 */



function maxFruit(arr) {
    let start = 0; // Start of the sliding window
    let map = new Map(); // To store fruit type and their count
    let ans = 0;

    for (let end = 0; end < arr.length; end++) {
        // Update the count of the current fruit type
        map.set(arr[end], (map.get(arr[end]) || 0) + 1);

        // Shrink the window if there are more than 2 types of fruits
        while (map.size > 2) {
            let fruitAtStart = arr[start];
            map.set(fruitAtStart, map.get(fruitAtStart) - 1);

            // Remove the fruit type from the map if its count becomes 0
            if (map.get(fruitAtStart) === 0) {
                map.delete(fruitAtStart);
            }

            // Move the start pointer to shrink the window
            start++;
        }

        // Update the maximum length of a valid window
        ans = Math.max(ans, end - start + 1);
    }

    return ans;
}

// Test case
console.log(maxFruit([1,2,1,2,1,1,3,1,1,1,1,1])); // Output: 8


