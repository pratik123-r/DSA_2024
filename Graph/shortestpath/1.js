// Input: n = 9, m = 10 edges = [[0,1],[0,3],[3,4],[4 ,5],[5,6],[1,2],[2,6],[6,7],[7,8],[6,8]] src = 0

// https://takeuforward.org/data-structure/shortest-path-in-undirected-graph-with-unit-distance-g-28
//https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1

function slove(edges, src, n) {
  let adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  let distance = new Array(n).fill(Infinity);
  let visited = new Array(n).fill(false);
  distance[src] = 0;

  let queue = [[src, 0]];
  while (queue.length) {
    const [node, dis] = queue.shift();
    distance[node] = Math.min(distance[node], dis);
    visited[node] = true;
    for (const curr of adj[node]) {
      if (!visited[curr]) {
        queue.push([curr, dis + 1]);
      }
    }
  }
  console.log(distance);
  
}


slove([[0,1],[0,3],[3,4],[4 ,5],[5,6],[1,2],[2,6],[6,7],[7,8],[6,8]], 0, 9)
slove([[1,0],[2,1],[0,3],[3,7],[3,4],[7,4],[7,6],[4,5],[4,6],[6,5]], 0, 8)
