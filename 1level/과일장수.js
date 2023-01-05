const solution = (k, m, score) => {
  score = score.sort((a, b) => a - b);
  let box = [];
  let totalPrice = 0;
  while (score.length) {
    box.push(score.pop());
    if (box.length === m) {
      totalPrice += Math.min(...box) * m;
      box = [];
    }
  }
  return totalPrice;
};
