// https://leetcode.com/problems/cheapest-flights-within-k-stops/

var findCheapestPrice = function(n, flights, src, dst, k) {
    let adj = Array.from({ length: n }, () => []);
    for (const [s, d, p] of flights) {
        adj[s].push([d, p]);
    }

    let cost = new Array(n).fill(Infinity);
    cost[src] = 0;

    const queue = [[src, 0, 0]];
    let ans = Infinity;

    while (queue.length) {
        const [node, nodeCost, stops] = queue.shift();

        if (stops > k + 1) continue;
        if (node === dst) {
            ans = Math.min(ans, nodeCost);
        }

        for (const [curr, price] of adj[node]) {
            const newCost = nodeCost + price;
            
            // Prune only if significantly worse
            if (newCost < cost[curr]) {
               cost[curr] = newCost;
                queue.push([curr, newCost, stops + 1]);
            }
        }
    }

    return ans === Infinity ? -1 : ans;
};

findCheapestPrice(
  4,
  [
    [0, 1, 100],
    [1, 2, 100],
    [2, 0, 100],
    [1, 3, 600],
    [2, 3, 200],
  ],
  0,
  3,
  1
);

// [[0,2,1],[0,1,4],[2,1,1], [1,3,8]]
