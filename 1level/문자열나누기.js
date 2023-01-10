const calculateWordCount = (s) => {
  let sArr = [...s];
  if (sArr.length === 0) return 0;

  let firstWord = sArr[0];
  let [mainCount, subCount] = [0, 0];

  sArr.every((word, index, array) => {
    word === firstWord ? mainCount++ : subCount++;
    if (mainCount === subCount) {
      sArr = array.slice(index + 1, sArr.length);
      return false;
    }
    return true;
  });
  return mainCount === subCount ? 1 + calculateWordCount(sArr.join('')) : 1;
};

const solution = (s) => {
  return calculateWordCount(s);
};

console.log(calculateWordCount('abracadabra'));
