/**
 * https://www.interviewbit.com/problems/maximum-sum-combinations/
 * 
    
 */


function maxCombinations(A, B, C) {
    // Sort both arrays in descending order to prioritize larger sums
    A.sort((a, b) => b - a);
    B.sort((a, b) => b - a);
    
    // Max-heap to store the sum combinations
    let maxHeap = [];
    let result = [];
    
    // A set to track visited index pairs to avoid duplicates
    let seen = new Set();
    
    // Start by pushing the largest sum combination A[0] + B[0] into the heap
    maxHeap.push([A[0] + B[0], 0, 0]);  // [sum, i, j]
    seen.add('0,0');
    
    // Extract the top C largest sums
    while (result.length < C) {
        // Get the largest sum from the heap
        let [currentSum, i, j] = maxHeap.pop();
        result.push(currentSum);
        
        // Explore the next possible combinations by moving the indices
        if (i + 1 < A.length && !seen.has(`${i + 1},${j}`)) {
            let newSum = A[i + 1] + B[j];
            maxHeap.push([newSum, i + 1, j]);
            seen.add(`${i + 1},${j}`);
        }
        if (j + 1 < B.length && !seen.has(`${i},${j + 1}`)) {
            let newSum = A[i] + B[j + 1];
            maxHeap.push([newSum, i, j + 1]);
            seen.add(`${i},${j + 1}`);
        }
        
        // Sort the heap to maintain the max-heap order (largest sum at the top)
        maxHeap.sort((a, b) => b[0] - a[0]);
    }
    
    return result;
}

// Example usage:
console.log(maxCombinations([59, 63, 65, 6, 46, 82, 28, 62, 92, 96, 43, 28, 37, 92, 5, 3, 54, 93, 83], 
                            [59, 63, 65, 6, 46, 82, 28, 62, 92, 96, 43, 28, 37, 92, 5, 3, 54, 93, 83], 10));  



                     
