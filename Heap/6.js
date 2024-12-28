/**
 * 846. Hand of Straights
 * 
    Alice has some number of cards and she wants to rearrange the cards into groups 
    so that each group is of size groupSize, and consists of groupSize consecutive cards.

    Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, 
    return true if she can rearrange the cards, or false otherwise.

    Example 1:
    Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
    Output: true
    Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

    Example 2:
    Input: hand = [1,2,3,4,5], groupSize = 4
    Output: false
    Explanation: Alice's hand can not be rearranged into groups of 4.
 */

var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize != 0)
        return false
    let map = new Map()
    for (let i = 0; i < hand.length; i++) {
        map.set(hand[i], (map.get(hand[i]) || 0) + 1)
    }
    const sortedArray = Array.from(map)
        .sort((a, b) => a[0] - b[0]);
        
    map = new Map(sortedArray)
    for (let [num, freq] of map.entries()) {
        
        while (freq) {
            for (let i = num; i < num+groupSize; i++) {
                if(map.get(i) === 0 || !map.get(i))
                        return false
                map.set(i, map.get(i)-1)
            }
            --freq
        }
    }
    return true
};

isNStraightHand([1,2,3,6,2,3,4,7,8], 3)