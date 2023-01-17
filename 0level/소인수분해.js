const solution = (n) => {
  let result = [];
  while (n !== 1) {
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        result.push(i);
        n /= i;
        break;
      }
    }
  }
  result = [...new Set(result)];
  return result;
};
