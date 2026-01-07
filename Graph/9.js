// 127. Word Ladder https://leetcode.com/problems/word-ladder/description/


function slove() {
  let beginWord = "hit";
  let endWord = "cog";
  let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

  const queue = [[beginWord, 1]];
  const set = new Set(wordList);

  while (queue.length) {
    const [word, step] = queue.shift();
console.log(word);

    
    set.delete(word);
    if (word === endWord) return step;

    for (let i = 0; i < word.length; i++) {
      for (let ch = 97; ch <= 122; ch++) {
        const newWord = word.split("");
        newWord[i] = String.fromCharCode(ch);
        newWord.join("");
        if (set.has(newWord)) {
          queue.push([newWord, step + 1]);
        }
      }
    }
  }
  return 0;
}

slove()

