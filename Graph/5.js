// detacte a cycle in undirected graph

function solve(A, B) {
  const visited = new Array(A + 1).fill(false);

  const adj = [];
  for (let i = 0; i <= A; i++) {
    adj.push([]);
  }

  for (const [u, v] of B) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const dfs = (node, parent) => {
    visited[node] = true;

    for (const curr of adj[node]) {
      if (!visited[curr]) {
        if (dfs(curr, node)) return true;
      } else if (visited[curr] && curr !== parent) {
        return true;
      }
    }

    return false;
  };

  const bfs = (src) => {
    const queue = [];

    queue.push({ node: src, parent: -1 });
    visited[src] = true;

    while (queue.length) {
      const { node, parent } = queue.shift();

      for (const curr of adj[node]) {
        if (!visited[curr]) {
          visited[curr] = true;
          queue.push({ node: curr, parent: node });
        } else if (curr !== parent) {
          return 1;
        }
      }
    }
    return 0;
  };

  // handle disconnected graph
  for (let i = 1; i <= A; i++) {
    if (!visited[i]) {
      if (bfs(i)) {
        return 1;
      }
    }
  }

  return 0;
}
