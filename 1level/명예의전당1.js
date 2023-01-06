const solution = (k, score) => {
  const honorScores = [];
  const lowestScores = [];
  score.forEach((value) => {
    honorScores.push(value);
    honorScores.sort((a, b) => b - a);
    if (honorScores.length > k) {
      honorScores.pop();
    }
    lowestScores.push(honorScores[honorScores.length - 1]);
  });
  return lowestScores;
};
