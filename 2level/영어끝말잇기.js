const solution = (n, words) => {
  let personCount = n;
  let passedWords = [];
  let arePassed = words.map((word, i, arr) => {
    if (i === 0) {
      passedWords.push(word);
      return true;
    }
    let prevWord = arr[i - 1];
    if (prevWord[prevWord.length - 1] !== word[0] || passedWords.includes(word)) {
      return false;
    }
    passedWords.push(word);
    return true;
  });
  let incorrectIndex = arePassed.findIndex((v) => !v);
  return incorrectIndex === -1
    ? [0, 0]
    : [(incorrectIndex % personCount) + 1, Math.floor(incorrectIndex / personCount) + 1];
};
