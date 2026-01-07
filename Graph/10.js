

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
    const set = new Set(wordList);
    const ans = [];

    if (!set.has(endWord)) return ans;

    // Queue of paths
    const queue = [];
    queue.push([beginWord]);

    let found = false;

    while (queue.length > 0 && !found) {
        const size = queue.length;
        const used = new Set(); // words used in this level

        for (let k = 0; k < size; k++) {
            const path = queue.shift();
            const last = path[path.length - 1];

            if (last === endWord) {
                ans.push(path);
                found = true;
            }

            const arr = last.split('');

            for (let i = 0; i < arr.length; i++) {
                const original = arr[i];

                for (let c = 97; c <= 122; c++) { // 'a' to 'z'
                    const ch = String.fromCharCode(c);
                    if (ch === original) continue;

                    arr[i] = ch;
                    const next = arr.join('');

                    if (set.has(next)) {
                        const newPath = [...path, next];
                        queue.push(newPath);
                        used.add(next);
                    }
                }

                arr[i] = original;
            }
        }

        // Remove words used at this level
        for (const w of used) {
            set.delete(w);
        }
    }

    return ans;
};
