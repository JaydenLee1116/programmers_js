const solution = (X, Y) => {
  const countX = new Array(10).fill(0);
  const countY = new Array(10).fill(0);

  [...X].forEach((v, i) => {
    countX[v]++;
  });
  [...Y].forEach((v, i) => {
    countY[v]++;
  });

  const ans = [];
  for (let i = 0; i < 10; i++) {
    if (countX[i] && countY[i]) {
      let minCount = countX[i] > countY[i] ? countY[i] : countX[i];
      ans.push(String(i).repeat(minCount));
    }
  }

  if (ans.length === 0) {
    return '-1';
  }
  if (Number(ans.join('')) === 0) {
    return '0';
  }
  return ans.reverse().join('');
};
