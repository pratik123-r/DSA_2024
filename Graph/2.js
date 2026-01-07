// 547. Number of Provinces //https://leetcode.com/problems/number-of-provinces/description/

// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let ans = 0
    const adj = []
    for (let i = 0; i < isConnected.length; i++) {
        adj.push([]);
    }

    for (let r = 0; r < isConnected.length; r++) {
        for (let c = 0; c < isConnected[r].length; c++) {
            if (isConnected[r][c] === 1) {
                adj[r].push(c)
                adj[c].push(r)
            }
        }
    }
    let visited = new Array(adj.length).fill(false)
    for (let i = 0; i < adj.length; i++) {
        if (!visited[i]) {
            dfsOfGraph(i, visited, adj)
            ans++
        }
    }
    return ans
};

function dfsOfGraph(curr, visited, adj) {
    visited[curr] = true
    for (const element of adj[curr]) {
        if (!visited[element]) {
            dfsOfGraph(element, visited, adj)
        }
    }
}