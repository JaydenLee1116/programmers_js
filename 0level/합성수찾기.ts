{
  const solution = (n: number) => {
    let answer = 0;
    new Array(n)
      .fill(0)
      .map((_, i) => i + 1)
      .forEach((number) => {
        if (getDivisorCount(number) >= 3) answer++;
      });
    return answer;
  };

  const getDivisorCount = (n: number) => {
    let count = 0;
    for (let i = 1; i < n + 1; i++) {
      if (n % i === 0) count++;
    }
    return count;
  };
}
