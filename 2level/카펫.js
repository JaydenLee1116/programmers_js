const solution = (brown, yellow) => {
  const totalCount = brown + yellow;
  let result;
  for (let i = 3; i <= totalCount; i++) {
    if (!(totalCount % i)) {
      let first = i;
      let second = totalCount / i;
      if ((first - 2) * (second - 2) === yellow) {
        result = [first, second];
        break;
      }
    }
  }
  return result.sort((a, b) => b - a);
};
