{
  const solution = (array: number[], n: number): number => {
    array.sort((a, b) => a - b);
    const differences: number[] = array.map((num) => Math.abs(num - n));
    const indexOfMinimumDifference: number = differences.indexOf(Math.min(...differences));
    return array[indexOfMinimumDifference];
  };
}
