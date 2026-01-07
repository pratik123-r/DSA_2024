// Alien Dictionary  https://www.geeksforgeeks.org/problems/alien-dictionary/1

//Input: words[] = ["baa", "abcd", "abca", "cab", "cad"]

function findOrder(words) {
  let adj = Array.from({ length: 26 }, () => []);
  let visited = new Array(26).fill(false);
  let path = new Array(26).fill(false);
  let ans = [];
  let set = new Set();

  for (let index = 0; index < words.length; index++) {
    for (let j = 0; j < words[index].length; j++) {
      set.add(words[index][j]);
    }
  }

  for (let index = 0; index < words.length - 1; index++) {
    let str1 = words[index];
    let str2 = words[index + 1];
    for (let k = 0; k < Math.min(str1.length, str2.length); k++) {
      if (str1[k] !== str2[k]) {
        adj[str1.charCodeAt(k) - 97].push(str2.charCodeAt(k) - 97);
        break;
      }
    }
  }


  for (let i = 0; i < adj.length; i++) {
    if (!visited[i] && dfs(i, adj, visited, path, ans)) return [];
  }

  for (let index = 0; index < ans.length; index++) {
    ans[index] = String.fromCharCode(ans[index] + 97);
  }
  return ans.filter((data) => set.has(data));
}

function dfs(node, adj, visited, path, ans) {
  visited[node] = true;
  path[node] = true;

  for (const curr of adj[node]) {
    if (!visited[curr] && dfs(curr, adj, visited, path, ans)) return true;
    else if (path[curr]) return true;
  }
  path[node] = false;
  ans.unshift(node);
  return false;
}

console.log(findOrder(["wrtkj","wrt"]));