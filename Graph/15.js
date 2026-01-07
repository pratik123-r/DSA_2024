// 210. Course Schedule II https://leetcode.com/problems/course-schedule-ii/

var findOrder = function (numCourses, prerequisites) {
    let adj = Array.from({ length: numCourses }, () => []);
    let visited = new Array(numCourses).fill(false);
    let path = new Array(numCourses).fill(false);
    let order = [];

    // build graph: prereq -> course
    for (const [course, prereq] of prerequisites) {
        adj[prereq].push(course);
    }

    for (let i = 0; i < numCourses; i++) {
        if (!visited[i]) {
            if (dfs(i)) return []; 
        }
    }

    return order

    function dfs(node) {
        visited[node] = true;
        path[node] = true;

        for (const nei of adj[node]) {
            if (!visited[nei]) {
                if (dfs(nei)) return true;
            } else if (path[nei]) {
                return true; 
            }
        }

        path[node] = false;
        order.unshift(node); 
        return false;
    }
};
