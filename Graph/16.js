// https://leetcode.com/problems/course-schedule/description/


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let adj = Array.from({ length: numCourses }).map(() => [])
    let visited = new Array(numCourses).fill(false)
    let path = new Array(numCourses).fill(false)

    for (const [src, dest] of prerequisites) {
        adj[dest].push(src)
    }

    for (let i = 0; i < numCourses; i++) {
        if (!visited[i] && dfs(visited, path, adj, i))
            return false
    }

    return true
};


function dfs(visited, path, adj, node) {
    visited[node] = true
    path[node] = true
    for (const curr of adj[node]) {
        if (!visited[curr] && dfs(visited, path, adj, curr))
            return true
        else if (path[curr])
            return true
    }
    path[node] = false
    return false
}