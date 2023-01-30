{
  type Numbers = number[];

  const solution = (numbers: number[], n: number): Numbers[] => {
    return numbers.filter((num, i) => i % n === 0).map((num, i) => numbers.slice(i * n, (i + 1) * n));
  };
}
