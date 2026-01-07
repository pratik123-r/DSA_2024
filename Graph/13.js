// Class containing the solution logic
class Solution {
    // Function to perform DFS
    dfs(node, adj, vis, st) {
        // Mark the current node as visited
        vis[node] = 1;

        // Explore all neighbors of this node
        for (let it of adj[node]) {
            // If the neighbor is not visited, recursively perform DFS
            if (vis[it] === 0) {
                this.dfs(it, adj, vis, st);
            }
        }

        // After visiting all neighbors, push this node into the stack
         st.push(node);
       
    }

    // Function to perform Topological Sort
    topoSort(V, adj) {
        // Create a visited array to mark visited vertices
        let vis = new Array(V).fill(0);

        // Array to act as stack
        let st = [];

        // Perform DFS from each unvisited vertex
        for (let i = 0; i < V; i++) {
            if (vis[i] === 0) {
                this.dfs(i, adj, vis, st);
            }
        }

        // Reverse the stack to get topological order
        return st.reverse();
    }
}

// Driver code
(function () {
    // Number of vertices
    let V = 6;

    // Adjacency list
    let adj = Array.from({ length: V }, () => []);

    // Adding edges
    adj[5].push(0);
    adj[5].push(2);
    adj[4].push(0);
    adj[4].push(1);
    adj[2].push(3);
    adj[3].push(1);

    // Create object of Solution
    let obj = new Solution();

    // Get the topological order
    let res = obj.topoSort(V, adj);

    // Print result
    console.log("Topological Sort:", res.join(" "));
})();




// Class that contains the topological sort logic
class Solution {
    // Function to perform BFS-based topological sort
    topologicalSort(V, adj) {
        // Create an array to store in-degree of each vertex
        let indegree = new Array(V).fill(0);

        // Loop over all vertices to calculate in-degree
        for (let i = 0; i < V; i++) {
            // Loop over adjacent vertices
            for (let it of adj[i]) {
                // Increase in-degree of connected vertex
                indegree[it]++;
            }
        }

        // Create a queue to store vertices with in-degree zero
        let q = [];

        // Loop through all vertices
        for (let i = 0; i < V; i++) {
            // If in-degree is zero, add to queue
            if (indegree[i] === 0) {
                q.push(i);
            }
        }

        // Array to store topological order
        let topo = [];

        // Process until queue is empty
        while (q.length > 0) {
            // Remove vertex from queue
            let node = q.shift();

            // Add it to the topological order
            topo.push(node);

            // Loop through adjacent vertices
            for (let it of adj[node]) {
                // Reduce in-degree of connected vertex
                indegree[it]--;
                // If in-degree becomes zero, add to queue
                if (indegree[it] === 0) {
                    q.push(it);
                }
            }
        }

        // Return the topological ordering
        return topo;
    }
}

// Driver code
let V = 6;

// Create adjacency list
let adj = Array.from({ length: V }, () => []);

// Adding edges
adj[5].push(0);
adj[5].push(2);
adj[4].push(0);
adj[4].push(1);
adj[2].push(3);
adj[3].push(1);

// Create Solution object
let obj = new Solution();

// Get topological sort
let ans = obj.topologicalSort(V, adj);

// Print the result
console.log(ans.join(" "));

