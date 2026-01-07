// 785. Is Graph Bipartite? https://leetcode.com/problems/is-graph-bipartite/description/

var isBipartite = function () {
  const graph = [
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
  ];

  const visited = new Array(graph.length).fill(-1);
  for (let i = 0; i < graph.length; i++) {
    if (visited[i] != -1) continue;
    let queue = [i];
    visited[i] = 0;
    while (queue.length) {
      const ele = queue.shift();

      for (const element of graph[ele]) {
        if (visited[element] == -1) {
          queue.push(element);
          visited[element] = 1 - visited[ele];
        } else if (visited[element] == visited[ele]) {
          return false;
        }
      }
    }
  }
};
