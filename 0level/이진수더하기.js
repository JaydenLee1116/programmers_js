const binTodec = (bin) => {
  return [...bin].map((v, i, arr) => +v * 2 ** (arr.length - i - 1)).reduce((acc, cur) => acc + cur, 0);
};

const solution = (bin1, bin2) => {
  let dec1 = binTodec(bin1);
  let dec2 = binTodec(bin2);
  let resultDec = dec1 + dec2;
  if (resultDec === 0) return '0';
  let result = [];
  while (resultDec >= 1) {
    result.push(resultDec % 2);
    resultDec = Math.floor(resultDec / 2);
  }
  result.reverse();
  return result.join('');
};
