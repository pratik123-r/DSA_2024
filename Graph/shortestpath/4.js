// https://www.geeksforgeeks.org/problems/shortest-path-in-weighted-undirected-graph/1

function slove(edges, n, src) {
  let adj = Array.from({ length: n }, () => []);

  for (const [u, v, wt] of edges) {
    adj[u].push([v, wt]);
    adj[v].push([u, wt]);
  }

  let distance = new Array(n).fill(Infinity);
  let parent = new Array(n).fill(-1);
  distance[src] = 0;
  parent[1] = 1;

  let queue = [];
  queue.push(src);

  while (queue.length) {
    const node = queue.shift();
    for (const [curr, wt] of adj[node]) {
      if (wt + distance[node] < distance[curr]) {
        distance[curr] = wt + distance[node];
        parent[curr] = node;
        queue.push(curr);
      }
    }
  }
  if (distance[n - 1] === Infinity) {
    return [-1];
  }

  let curr = n - 1;
  let arr = [];
  while (curr != -1 && curr != 1) {
    arr.push(curr);
    curr = parent[curr];
  }
  arr.push(curr);
  arr.reverse();

  return arr;
}
//1 4 3 5
console.log(
  slove(
    [
      [1, 2, 2],
      [2, 5, 5],
      [2, 3, 4],
      [1, 4, 1],
      [4, 3, 3],
      [3, 5, 1],
    ],
    6,
    1
  )
);
