
function bfsOfGraph(V, adj) {
  const bfs = [];
  const vis = new Array(V).fill(false);
  const q = [];

  // start BFS from node 0
  q.push(0);
  vis[0] = true;

  while (q.length > 0) {
    const node = q.shift(); // dequeue
    bfs.push(node);

    for (const it of adj[node]) {
      if (!vis[it]) {
        vis[it] = true;
        q.push(it);
      }
    }
  }

  return bfs;
}

function dfsOfGraph(curr, visited, adj, result) {
   
    result.push(curr)
    visited[curr] = true

    for (const element of adj[curr]) {
        if(!visited[element])
            dfsOfGraph(element, visited, adj, result)
    }


}

const adj = [];
for (let i = 0; i < 5; i++) {
  adj.push([]);
}

adj[0].push(1);
adj[1].push(0);

adj[0].push(4);
adj[4].push(0);

adj[1].push(2);
adj[2].push(1);

adj[1].push(3);
adj[3].push(1);


console.log(bfsOfGraph(5, adj));

let result = []
const ans = dfsOfGraph(0,  new Array(5).fill(false), adj, result);

console.log(result);

