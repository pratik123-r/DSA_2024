/**
    There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

    You are giving candies to these children subjected to the following requirements:

    Each child must have at least one candy.
    Children with a higher rating get more candies than their neighbors.
    Return the minimum number of candies you need to have to distribute the candies to the children.
  https://leetcode.com/problems/candy/solutions/2234434/c-o-n-time-o-1-space-full-explanation
 */


/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let n = ratings.length;
    let candy = n; // Start with 1 candy for each child
    let currentPeak = 0;
    let currentValley = 0;
    let i = 1;

    while (i < n) {
        if (ratings[i] === ratings[i - 1]) {
            i++; // Skip equal ratings
            continue;
        }

        // Handle increasing slope
        currentPeak = 0;
        while (i < n && ratings[i] > ratings[i - 1]) {
            currentPeak++;
            candy += currentPeak;
            i++;
        }

        // Handle decreasing slope
        currentValley = 0;
        while (i < n && ratings[i] < ratings[i - 1]) {
            currentValley++;
            candy += currentValley;
            i++;
        }

        // Adjust for overlapping peak and valley
        candy -= Math.min(currentPeak, currentValley);
    }

    return candy;
};









candy([1, 3, 6, 8, 9, 5, 3, 6, 8, 5, 4, 2, 2, 3, 7, 7, 9, 8, 6, 6, 6, 4, 2])

