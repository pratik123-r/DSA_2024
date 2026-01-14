// https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1

function slove(edges, n, src) {
  let adj = Array.from({ length: n }, () => []);

  for (const [u, v, wt] of edges) {
    adj[u].push([v, wt]);
    adj[v].push([u, wt]);
  }

  let distance = new Array(n).fill(Infinity);
  distance[src] = 0;

  let queue = [];
  queue.push(src);

  while (queue.length) {
    const node = queue.shift();
    for (const [curr, wt] of adj[node]) {
      if (wt + distance[node] < distance[curr]) {
        distance[curr] = wt + distance[node];
        queue.push(curr);
      }
    }
  }

  return distance.map((d) => (d === Infinity ? -1 : d));
}
console.log(
  slove(
    [
      [0, 1, 1],
      [1, 2, 3],
      [0, 2, 6],
    ],
    3,
    2
  )
);

class Heap {
  constructor(compare) {
    this.data = [];
    this.compare = compare;
  }

  push(val) {
    this.data.push(val);
    this._up(this.data.length - 1);
  }

  pop() {
    if (this.data.length === 1) return this.data.pop();
    const top = this.data[0];
    this.data[0] = this.data.pop();
    this._down(0);
    return top;
  }

  _up(i) {
    while (i > 0) {
      let p = (i - 1) >> 1;
      if (this.compare(this.data[p], this.data[i])) break;
      [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
      i = p;
    }
  }

  _down(i) {
    let n = this.data.length;
    while (true) {
      let l = 2 * i + 1;
      let r = 2 * i + 2;
      let best = i;

      if (l < n && !this.compare(this.data[best], this.data[l])) best = l;
      if (r < n && !this.compare(this.data[best], this.data[r])) best = r;
      if (best === i) break;

      [this.data[i], this.data[best]] = [this.data[best], this.data[i]];
      i = best;
    }
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

class Solution {
  dijkstra(n, edges, src) {
    let adj = Array.from({ length: n }, () => []);

    for (const [u, v, wt] of edges) {
      adj[u].push([v, wt]);
      adj[v].push([u, wt]);
    }

    let distance = new Array(n).fill(Infinity);
    distance[src] = 0;

    let heap = new Heap((a, b) => a[1] < b[1]);
    heap.push([src, 0]);

    while (!heap.isEmpty()) {
      const [node, dist] = heap.pop();

      if (dist > distance[node]) continue;

      for (const [curr, wt] of adj[node]) {
        if (wt + distance[node] < distance[curr]) {
          distance[curr] = wt + distance[node];
          heap.push([curr, distance[curr]]);
        }
      }
    }

    return distance.map(d => (d === Infinity ? -1 : d));
  }
}

