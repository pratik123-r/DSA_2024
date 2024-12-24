/**
 * Fractional Knapsack Problem : Greedy Approach
 * 

    Example:
    Input: N = 3, W = 50, values[] = {100,60,120}, weight[] = {20,10,30}.
    Output: 240.00
    Explanation: The first and second items  are taken as a whole  while only 20 units of the third item is taken. Total value = 100 + 60 + 80 = 240.00
 */

const FractionalKnapsack = (w, values, weight) => {
    let arr = []
    for (let i = 0; i < values.length; i++) {
        arr.push({
            total: values[i] / weight[i],
            values: values[i],
            weight: weight[i]
        })
    }
    arr.sort((a, b) => b.total - a.total)

    let ans = 0;

    for (let i = 0; i < arr.length; i++) {
        if (w >= arr[i].weight) {   
            ans += arr[i].values
            w -= arr[i].weight
        } else {
            ans += (w * arr[i].values) / arr[i].weight
            break
        }
        
    }
    
    return ans

}


console.log(FractionalKnapsack(50, [100, 60, 120], [20, 10, 30]));
