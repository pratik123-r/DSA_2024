/**
 * Maximum Points You Can Obtain from Cards
 * 
 * 
    Example 1:
    Input: cardPoints = [1,2,3,4,5,6,1], k = 3
    Output: 12
    Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

    Example 2:
    Input: cardPoints = [2,2,2], k = 2
    Output: 4
    Explanation: Regardless of which two cards you take, your score will always be 4.

    Example 3:
    Input: cardPoints = [9,7,7,9,7,7,9], k = 7
    Output: 55
    Explanation: You have to take all the cards. Your score is the sum of points of all cards.

 */

    function maxScore(cardPoints, k) {
        let res = 0;
    
        // First k elements in our window
        for (let i = 0; i < k; i++) {
            res += cardPoints[i];
        }
    
        let curr = res;
    
        for (let i = k - 1; i >= 0; i--) {
            // Remove the last visited element and add the non-visited element from the end
            curr -= cardPoints[i];
            curr += cardPoints[cardPoints.length - k + i];
    
            // Check the maximum value of any possible combination
            res = Math.max(res, curr);
        }
    
        return res;
    }
    
    // Example usage:
    const cardPoints = [1, 2, 3, 4, 5, 6, 1];
    const k = 3;
    console.log(maxScore(cardPoints, k)); // Output: 12
    
