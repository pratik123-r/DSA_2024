//Input:n = 7, m = 8 ,Edges = [[0,4,2], [0,5,3], [5,4,1], [4,6,3], [4,2,1], [6,1,2], [2,3,3], [1,3,1]]
// https://takeuforward.org/data-structure/shortest-path-in-directed-acyclic-graph-topological-sort-g-27
// https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph/1

function slove(src, n, edges) {
  let adj = Array.from({ length: n }, () => []);
  for (const [src, dest, wt] of edges) {
    adj[src].push([dest, wt]);
  }
  let distance = new Array(n).fill(Infinity);
  let visited = new Array(n).fill(false);
  let stack = [];

  topo(visited, stack, adj, src);

  function topo(visited, stack, adj, node) {
    visited[node] = true;
    for (const [curr] of adj[node]) {
      if (!visited[curr]) topo(visited, stack, adj, curr);
    }
    stack.push(node);
  }
  distance[src] = 0;

  while (stack.length) {
    const node = stack.pop();

    for (const [curr, dis] of adj[node]) {
      if (dis + distance[node] < distance[curr]) {
        distance[curr] = dis + distance[node];
      }
    }
  }
  return distance.map((data) => (data == Infinity ? -1 : data));
}

slove(0, 7, [[0,4,2], [0,5,3], [5,4,1], [4,6,3], [4,2,1], [6,1,2], [2,3,3], [1,3,1]])
console.log(slove(0, 7, [[0,4,2], [0,5,3], [5,4,1], [4,6,3], [4,2,1], [6,1,2], [2,3,3], [1,3,1]]));

