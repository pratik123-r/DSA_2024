/**
 * Nearest Smaller Element On left

    Input 1:
        A = [4, 5, 2, 10, 8]
    Output 1:
        G = [-1, 4, -1, 2, 2]
    Explaination 1:
        index 1: No element less than 4 in left of 4, G[1] = -1
        index 2: A[1] is only element less than A[2], G[2] = A[1]
        index 3: No element less than 2 in left of 2, G[3] = -1
        index 4: A[3] is nearest element which is less than A[4], G[4] = A[3]
        index 4: A[3] is nearest element which is less than A[5], G[5] = A[3]
        

    Input 2:
        A = [3, 2, 1]
    Output 2:
        [-1, -1, -1]
    Explaination 2:
        index 1: No element less than 3 in left of 3, G[1] = -1
        index 2: No element less than 2 in left of 2, G[2] = -1
        index 3: No element less than 1 in left of 1, G[3] = -1
 */

const nearestSmallerElemnt = (arr) => {
    let stack = [arr[0]];
    let ans = new Array(arr.length).fill(-1)
    for (let i = 1; i < arr.length; i++) {
        
        while (stack[stack.length-1] >= arr[i] && stack.length) {
            stack.pop()
        }
        if(stack[stack.length-1] < arr[i]) {
            ans[i] = stack[stack.length-1]
        }
        stack.push(arr[i])
        
    }
    return ans
}
console.log(nearestSmallerElemnt([4, 5, 2, 10, 8]));
