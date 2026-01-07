// detact cycle in directed graph

function slove() {
  let adj = Array.from({ length: 11 }, () => []);
  adj[1].push(2);
  adj[2].push(3);
  adj[3].push(4);
  adj[3].push(7);
  adj[4].push(5);
  adj[5].push(6);
  adj[7].push(5);
  adj[8].push(9);
  adj[9].push(10);
  adj[10].push(8);
  let path = new Array(11).fill(false);
  let visited = new Array(11).fill(false);

  for (let i = 1; i <= adj.length; i++) {
    if (!visited[i] && dfs(i, adj, path, visited)) {
      return true;
    }
  }

  return false;
}
// ✅ Optimized DFS using one array
function dfs2(src, adj, state) {
  state[src] = 1; // visiting

  for (const curr of adj[src]) {
    if (state[curr] === 0) {
      if (dfs(curr, adj, state)) return true;
    } else if (state[curr] === 1) {
      // back edge → cycle
      return true;
    }
  }

  state[src] = 2; // visited
  return false;
}


function dfs(src, adj, path, visited) {
  visited[src] = true;
  path[src] = true;

  for (const curr of adj[src]) {
    if (!visited[curr] && dfs(curr, adj, path, visited)) {
     return true;
    } else if (path[curr]) {
      return true;
    }
  }

  path[src] = false;
  return false;
}


console.log(slove());
