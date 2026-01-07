//733. Flood Fill - https://leetcode.com/problems/flood-fill/description/



var floodFill = function (image, sr, sc, color) {
    let visited = new Set()
    let rLen = image.length
    let cLen = image[0].length
    let scolor = image[sr][sc]
    const dfs = (r, c) => {
        if (!visited.has(`${r}-${c}`) && r >= 0 && r < rLen && c >= 0 && c < cLen && image[r][c] == scolor) {

            image[r][c] = color
            visited.add(`${r}-${c}`)
            dfs(r + 1, c)
            dfs(r, c + 1)
            dfs(r - 1, c)
            dfs(r, c - 1)
        }
    }
    dfs(sr, sc)
    return image
};