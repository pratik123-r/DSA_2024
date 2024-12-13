/**

    402. Remove K Digits

    Example 1:
    Input: num = "1432219", k = 3
    Output: "1219"
    Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
    
    Example 2:
    Input: num = "10200", k = 1
    Output: "200"
    Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
   
    Example 3:
    Input: num = "10", k = 2
    Output: "0"
    Explanation: Remove all the digits from the number and it is left with nothing which is 0.
*/


// brute force
function removeKDigitsCombinations(num, k) {
    const results = new Set();

    function generateCombinations(path, start, digitsToRemove) {
        if (digitsToRemove === 0) {
            // Add the combination to results, removing leading zeros
            results.add(path.replace(/^0+/, '') || '0');
            return;
        }

        for (let i = start; i < num.length; i++) {
            generateCombinations(path + num[i], i + 1, digitsToRemove - 1);
        }
    }

    generateCombinations("", 0, num.length - k);

    // Convert Set to Array and sort the results numerically
    return Array.from(results).sort((a, b) => a - b)[0];
}

console.log(removeKDigitsCombinations("1432", 2));










// optimise

var removeKdigits = function(num, k) {
    num = num.split('').map(Number);
    let stack = []
    for (let i = 0; i < num.length; i++) {
         while (k && stack.length && num[i] < stack[stack.length-1] ) {
             k--;
             stack.pop()
         }
         if(stack.length || num[i]!=0)
             stack.push(num[i])
    }
     while (k && stack.length) {
         stack.pop();
         k--;
     }
    return stack.join('') === "" ? '0' : stack.join('')
 };

console.log(removeKdigits("1432219", 3));



