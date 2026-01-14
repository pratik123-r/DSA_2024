// https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/description/

var countPaths = function (n, roads) {
    const ways = new Array(n).fill(0);
    const cost = new Array(n).fill(Infinity);
    let adj = Array.from({ length: n }, () => []);
    const MOD = 1e9 + 7;
    for (const [u, v, dist] of roads) {
        adj[u].push([v, dist]);
        adj[v].push([u, dist]);
    }
    let queue = [[0,0]];
    cost[0] = 0;
    ways[0] = 1;
    while (queue.length) {
        queue.sort((a, b) => a[1] - b[1]);
        const [node, dist] = queue.shift(); 
        if(dist > cost[node]) continue;
        for (const [curr, wt] of adj[node]) {
            if (cost[node] + wt < cost[curr]) {
                cost[curr] = cost[node] + wt;
                ways[curr] = ways[node];
                queue.push([curr, cost[curr]]);
            } else if (cost[node] + wt == cost[curr]) {
                ways[curr] = (ways[curr] + ways[node]) % MOD;
            }
        }
    }
    return ways[n - 1];
};

countPaths(7, [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]])






// [[1,0,2348],[2,1,2852],[2,0,5200],[3,1,12480],[2,3,9628],[4,3,7367],[4,0,22195],[5,4,5668],[1,5,25515],[0,5,27863],[6,5,836],[6,0,28699],[2,6,23499],[6,3,13871],[1,6,26351],[5,7,6229],[2,7,28892],[1,7,31744],[3,7,19264],[6,7,5393],[2,8,31998],[8,7,3106],[3,8,22370],[8,4,15003],[8,6,8499],[8,5,9335],[8,9,5258],[9,2,37256],[3,9,27628],[7,9,8364],[1,9,40108],[9,5,14593],[2,10,45922],[5,10,23259],[9,10,8666],[10,0,51122],[10,3,36294],[10,4,28927],[11,4,25190],[11,9,4929],[11,8,10187],[11,6,18686],[2,11,42185],[11,3,32557],[1,11,45037]]

// Good, now we have enough context 👍
// Let me explain very clearly, step-by-step, using why your code breaks, what if (d > dist[u]) continue really does, and why Dijkstra seems to “work without it” sometimes.

// 1️⃣ Core problem in your code (important)

// Your code is NOT Dijkstra.

// let queue = [0];
// const node = queue.shift();   // ❌ FIFO queue (BFS-like)


// You are using a normal queue, not a min-heap / priority queue.

// 👉 That means:

// Nodes are processed in arrival order

// NOT in smallest distance first order

// This is the root cause of confusion.

// 2️⃣ What if (d > dist[u]) continue actually means

// This line appears in priority-queue-based Dijkstra:

// if (d > dist[u]) continue;

// Meaning (simple words)

// “I reached node u with distance d,
// but I already know a better (shorter) distance dist[u],
// so this path is outdated → skip it.”

// It does NOT skip nodes permanently
// It skips old / worse paths.

// 3️⃣ Why outdated entries happen (VERY IMPORTANT)

// In Dijkstra, same node can be pushed multiple times.

// Example graph:

// 0 --10--> 1
// 0 --1--> 2 --1--> 1

// Steps:

// Push (1, 10)

// Push (2, 1)

// From 2, push (1, 2) ← better path

// Now PQ contains:

// (1, 10)   ❌ outdated
// (1, 2)    ✅ best


// When (1, 10) comes out later:

// if (10 > dist[1]) continue; // skip


// ✔️ Correct behavior

// 4️⃣ Why your queue version BREAKS without this logic

// Let’s connect this to your code.

// Your code behavior:

// Same node gets pushed multiple times

// FIFO queue processes older, worse paths first

// You use visited[node] = true ❌

// This combination is dangerous.

// 5️⃣ Why visited[] is WRONG here
// if (visited[node]) continue;
// visited[node] = true;


// This means:

// “Once I process a node once, I will NEVER allow better paths later.”

// This is ❌ incorrect unless:

// Node is guaranteed to be processed with minimum distance first

// That guarantee exists ONLY in Dijkstra with min-heap.

// 6️⃣ Concrete failure example (small & clear)
// Graph
// 0 --10--> 1
// 0 --1-->  2 --1--> 1

// Your queue execution
// queue = [0]


// 1️⃣ Process 0

// push 1 (cost 10)
// push 2 (cost 1)
// queue = [1, 2]


// 2️⃣ Process 1 FIRST ❌

// visited[1] = true
// cost[1] = 10


// 3️⃣ Process 2

// find better path to 1 → cost = 2
// BUT visited[1] = true ❌
// so you never re-process node 1


// ❌ WRONG answer

// 7️⃣ Why Dijkstra works even WITHOUT visited[]

// Correct Dijkstra uses:

// while (pq.length) {
//   const [d, u] = pq.popMin();

//   if (d > dist[u]) continue;

//   for (edges...) {
//     relax
//   }
// }

// Why this works:

// Min-heap guarantees smallest distance first

// d > dist[u] skips stale entries

// No visited[] needed

// ✔️ Node can be processed multiple times
// ✔️ Only best distance is expanded

// 8️⃣ Why your test case explodes

// Your large input has:

// Many cycles

// Multiple alternate paths

// Same node reachable many times

// Without:

// if (d > dist[u]) continue;


// or without:

// priority queue


// Your code:

// Processes nodes in wrong order

// Locks nodes early using visited

// Counts paths incorrectly

// 9️⃣ FINAL RULES (MEMORIZE THIS)
// ✅ Correct combinations
// Approach	Queue	visited	stale check
// BFS (unit weight)	FIFO	✔️	❌
// Dijkstra	Min Heap	❌	✔️
// Your code	FIFO	❌	❌
// 🔥 Correct solution for this problem

// This problem REQUIRES Dijkstra with Min Heap.

// Your approach cannot be fixed with visited[].

// 10️⃣ One-line takeaway

// if (d > dist[u]) continue
// skips old, worse paths,
// and is mandatory when the same node can enter the queue multiple times.

// If you want, I can:

// Rewrite your code correctly

// Show heap implementation

// Dry-run your exact input step-by-step