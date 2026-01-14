// https://leetcode.com/problems/path-with-minimum-effort/


var minimumEffortPath = function (grid) {
    let n = grid.length;
    let m = grid[0].length;
    const cost = Array.from({ length: n }, () => Array(m).fill(Infinity));

    let queue = [[0, 0]];

    cost[0][0] = 0;

    while (queue.length) {
        const [row, col] = queue.shift();
        for (const [r, c] of [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ]) {
            const dr = r + row;
            const dc = c + col;
            if (dr < n && dc < m && dr >= 0 && dc >= 0) {

                const effort = Math.max(
                    cost[row][col],
                    Math.abs(grid[dr][dc] - grid[row][col])
                );
                if (effort < cost[dr][dc]) {
                    cost[dr][dc] = effort
                    queue.push([dr, dc]);
                }

            }
        }
    }

    return cost[n - 1][m - 1];
};