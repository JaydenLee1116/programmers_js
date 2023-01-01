const solution = (my_str, n) => {
  const dividedCount = Math.ceil(my_str.length / n);
  const tempArr = new Array(dividedCount).fill(null);
  const answer = tempArr.map((_, index) => {
    return my_str.slice(index * n, (index + 1) * n);
  });
  return answer;
};
