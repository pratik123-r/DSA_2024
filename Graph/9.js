// 127. Word Ladder https://leetcode.com/problems/word-ladder/description/


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const queue = [[beginWord, 1]];
    const set = new Set(wordList);

    while (queue.length) {
        const [word, step] = queue.shift();
        set.delete(word);
        if (word === endWord) return step;
        const newWord = word.split("");
        for (let i = 0; i < word.length; i++) {
            for (let ch = 97; ch <= 122; ch++) {
                newWord[i] = String.fromCharCode(ch);
                if (set.has(newWord.join(""))) {
                    queue.push([newWord.join(""), step + 1]);
                }
            }
            newWord[i] = word[i]
        }
    }
    return 0;
};

ladderLength()

