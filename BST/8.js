/**
 * Ceil in BST
 * Note: Ceil(X) is a number that is either equal to X or is immediately greater than X.
 */

class Solution {
    // Function to return the ceil of given number in BST.
    findCeil(root, input) {
        let curr = root;
        let ans = -1;
        while(curr) {
            
            if(curr.data == input)
                return input;
            else if(curr.data > input) {
                ans = curr.data
                curr = curr.left
            }else {
                curr = curr.right
            }
        }
        return ans
        
    }
}