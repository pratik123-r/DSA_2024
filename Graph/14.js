// 802. Find Eventual Safe States https://leetcode.com/problems/find-eventual-safe-states/

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  let state = new Array(graph.length).fill(0);
  let ans = new Array(graph.length).fill(true);

  for (let i = 0; i < graph.length; i++) {
    if (!state[i]) {
      dfs(i, graph, state, ans);
    }
  }
  ans = ans.reduce((res, val, idx) => {
    if (val) res.push(idx);
    return res;
  }, []);

  return ans;
};

function dfs(node, adj, state, ans) {
  state[node] = 1;
  let isSafe = true;
  for (const curr of adj[node]) {
    if (!state[curr]) {
      isSafe = isSafe && dfs(curr, adj, state, ans);
    } else if (state[curr] === 1) {
      isSafe = false;
    } else if (state[curr] === 2) {
      isSafe = isSafe && ans[curr];
    }
  }

  state[node] = 2;
  ans[node] = isSafe;
  return isSafe;
}

// graph = [[1,2],[2,3],[5],[0],[5],[],[]]

var eventualSafeNodes = function (graph) {
  let indeg = new Array(graph.length).fill(0);

  let adj = Array.from({ length: graph.length }, () => []);
  let ans = [];
  let queue = [];

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      adj[graph[i][j]].push(i);
      indeg[i]++;
    }
  }

  for (let index = 0; index < indeg.length; index++) {
    if (!indeg[index]) {
      queue.push(index);
    }
  }

  bfs(indeg, adj, ans, queue);
  return ans.sort((a,b) => a-b)
};

function bfs(indeg, adj, ans, queue) {
  while (queue.length) {
    let ele = queue.shift();
    ans.push(ele);
    for (const element of adj[ele]) {
      indeg[element]--;
      if (!indeg[element]) {
        queue.push(element);
      }
    }
  }
}
