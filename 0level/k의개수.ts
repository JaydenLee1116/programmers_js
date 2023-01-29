{
  const solution = (i: number, j: number, k: number): number => {
    return new Array(j + 1)
      .fill(true)
      .map((_, index) => {
        return index >= i ? [...index.toString()].filter((n) => parseInt(n) === k).length : 0;
      })
      .reduce((acc, cur) => acc + cur);
  };
}
