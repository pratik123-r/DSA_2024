// With Bellman-Ford

function hasNegativeCycle(n, edges) {
  const dist = Array(n).fill(Infinity);
    dist[0] = 0
  for (let i = 0; i < n - 1; i++) {
    for (const [u, v, w] of edges) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  // One more relaxation
  for (const [u, v, w] of edges) {
    if (dist[u] + w < dist[v]) {
      return true; // Negative cycle found
    }
  }
  return false;
}
console.log(hasNegativeCycle(4, [[0,1,1],[1,2,-1],[2,3,1]]));
