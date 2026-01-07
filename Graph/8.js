// 1020. Number of Enclaves. https://leetcode.com/problems/number-of-enclaves/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (board) {
    let rlen = board.length;
    let clen = board[0].length;
    let visited = Array.from({ length: rlen }).map(() =>
        new Array(clen).fill(false)
    );
    let queue = [];
    for (let i = 0; i < Math.max(rlen, clen); i++) {
        if (i < clen && board[0][i] == 1) queue.push({ row: 0, col: i });

        if (i < rlen && board[i][0] == 1) queue.push({ row: i, col: 0 });

        if (i < rlen && board[i][clen - 1] == 1)
            queue.push({ row: i, col: clen - 1 });

        if (i < clen && board[rlen - 1][i] == 1)
            queue.push({ row: rlen - 1, col: i });
    }

    for (let i = 0; i < queue.length; i++) {
        const { row, col } = queue[i]
        if (!visited[row][col])
            dfs(visited, queue[i], board, rlen, clen)
    }

    // while (queue.length) {
    //     const { row, col } = queue.shift();
    //     visited[row][col] = true;
    //     for (const [r, c] of [
    //         [1, 0],
    //         [0, 1],
    //         [0, -1],
    //         [-1, 0],
    //     ]) {
    //         const dr = row + r;
    //         const dc = col + c;
    //         if (
    //             dr >= 0 &&
    //             dc >= 0 &&
    //             dr < rlen &&
    //             dc < clen &&
    //             board[dr][dc] == 1 &&
    //             !visited[dr][dc]
    //         ) {
    //             queue.push({ row: dr, col: dc });
    //         }
    //     }
    // }

    let count = 0

    for (let i = 0; i < rlen; i++) {
        for (let j = 0; j < clen; j++) {
            if (board[i][j] == 1 && !visited[i][j]) {
                count++;
            }
        }
    }
    return count;

};


function dfs(visited, src, board, rlen, clen) {
    const { row, col } = src;
    visited[row][col] = true

    for (const [r, c] of [
        [1, 0],
        [0, 1],
        [0, -1],
        [-1, 0],
    ]) {
        const dr = row + r;
        const dc = col + c;
        if (
            dr >= 0 &&
            dc >= 0 &&
            dr < rlen &&
            dc < clen &&
            board[dr][dc] == 1 &&
            !visited[dr][dc]
        ) {
            dfs(visited, { row: dr, col: dc }, board, rlen, clen)
        }
    }

}