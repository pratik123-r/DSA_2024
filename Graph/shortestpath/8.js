//743. Network Delay Time https://leetcode.com/problems/network-delay-time/description/


var networkDelayTime = function(times, n, k) {
    
    let adj = Array.from({length: n+1}, () => [])
    let distance = new Array(n+1).fill(Infinity)
    for (const [u,v, dist] of times ) {
            adj[u].push([v, dist])
    }

    let queue = []

    queue.push(k)
    distance[k] = 0
    while (queue.length) {
        const node = queue.shift()

        for (const [curr, dist] of adj[node]) {
            if(distance[curr] > dist + distance[node]){
                distance[curr] = dist + distance[node]
                queue.push(curr)
            }
        }
    }
    let ans = Infinity
    for (let index = 1; index < distance.length; index++) {
       
       ans = Math.max(distance[index], ans)
        
    }
   return ans == Infinity ? -1 : ans
};



networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], n ,k)